import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
    const [cart, setCart] = useState([]);


    const addToCart = (newItem) => {
        setCart((prev) => {
            const existingIndex = prev.findIndex(
                (item) =>
                    item.id === newItem.id &&
                JSON.stringify(item.options) === JSON.stringify(newItem.options)
            );

            if (existingIndex !== -1) {
                const updated = [...prev];
                updated[existingIndex].quantity += newItem.quantity;
                return updated;
            }

            return [...prev, newItem];
        });
    };

    const removeFromCart = (index) => {
        setCart((prev) => prev.filter((_, i) => i !== index));
    };

    return (
        <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart(){
    return useContext(CartContext);
}