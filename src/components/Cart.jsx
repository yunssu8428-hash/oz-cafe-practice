import data from "../assets/data";
import { useCart } from"../context/cartContext";
import { useMenu } from "../context/menuContext";

function Cart() {
  const { cart, removeFromCart } = useCart();
  const { menu } = useMenu();

  if (!menu) return <div>메뉴 정보가 없어요!</div>;

  const allMenu = [...menu.커피, ...menu.논커피];

  return (
    <>
    <h2>장바구니</h2>
      <ul className="cart">
        {cart.length ? (
          cart.map((el, index) => (
            <CartItem key= {index}
            item = {allMenu.find((m) => m.id === el.id)}
            options={el.options}
            quantity={el.quantity}
            index={index}
            removeFromCart={removeFromCart} />
          ))
        ) : (
          <div className="no-item">장바구니에 담긴 상품이 없어요!</div>
        )}
      </ul>   
    </>
  );
}


export default Cart;
