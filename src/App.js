import React, { useState } from "react";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./store/CartProvider";
import { Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Cart from "./components/Cart/Cart";

const App = () => {
    const [isOpen, setIsOpen] = useState(false);

    const cartToggleHandler = () => {
        setIsOpen((prev) => !prev);
    };

    return (
        <CartProvider>
            <Header onCartToggle={cartToggleHandler} />

            {isOpen && <Cart />}
            {!isOpen && (
                <>
                    <Route path="/home">
                        <Home />
                    </Route>
                    <Route path="/store">
                        <Store cartIsOpen={isOpen} />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>{" "}
                </>
            )}

            <Footer />
        </CartProvider>
    );
};

export default App;
