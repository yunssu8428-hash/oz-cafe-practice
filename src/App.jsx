import "./App.scss";
import Header from "./components/Header";
import Menu from "./components/Menu";
import { Route, Routes } from "react-router-dom";
import Cart from "./components/Cart";

import { MenuProvider } from "./context/menuContext";
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <MenuProvider>
      <CartProvider>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Menu/> } />
              <Route path="/cart" element={<Cart />} />
            </Routes>
          </main>
      </CartProvider>
    </MenuProvider>
  );
}

export default App;
