import React from "react";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./store/CartProvider";
import { Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Cart from "./components/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/ProductDetails/ProductDetails";

const App = () => {
    return (
        <>
            <CartProvider>
                <Header />
                <Switch>
                    <Route path="/shopping_cart">
                        <Cart />
                    </Route>
                    <Route path="/home">
                        <Home />
                    </Route>

                    <Route path="/store" exact>
                        <Store />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>

                    <Route path="/store/:productID">
                        <ProductDetails />
                    </Route>
                </Switch>
                <Footer />
            </CartProvider>
        </>
    );
};

export default App;
