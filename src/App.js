import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import Products from "./components/Products/Products";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const cartToggleHandler = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <CartProvider>
      <Header onCartToggle={cartToggleHandler} />
      {isOpen && <Cart />}
      {!isOpen && <Products />}
      <Footer />
    </CartProvider>
  );
};

export default App;
