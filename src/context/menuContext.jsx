import { createContext, useContext, useState } from "react";
import data from "../assets/data";


const MenuContext = createContext();

export function MenuProvider({ children }) {
    const [menu] = useState(data.menu);

    return (
        <MenuContext.Provider value={{ menu }}>
            {children}
        </MenuContext.Provider>
    );
}

export function useMenu() {
    return useContext(MenuContext);
}