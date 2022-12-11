import React from "react";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./store/CartProvider";
import { Route } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Cart from "./components/Cart/Cart";
import Contact from "./pages/Contact/Contact";

const App = () => {
    return (
        <>
            <CartProvider>
                <Header />
                <Route path="/shopping_cart">
                    <Cart />
                </Route>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/store">
                    <Store />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Footer />
            </CartProvider>
        </>
    );
};

export default App;
