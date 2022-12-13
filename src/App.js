import React, { useContext } from "react";
import Footer from "./components/Layout/Footer/Footer";
import Header from "./components/Layout/Header/Header";
import CartProvider from "./store/CartProvider";
import { Redirect, Route, Switch } from "react-router-dom";
import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Store from "./pages/Store/Store";
import Cart from "./components/Cart/Cart";
import Contact from "./pages/Contact/Contact";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Auth from "./pages/Auth/Auth";
import AuthContext from "./store/auth-context";

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <>
            <CartProvider>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>

                    <Route exact path="/home">
                        <Home />
                    </Route>

                    <Route path="/about" exact>
                        <About />
                    </Route>

                    <Route path="/contact" exact>
                        <Contact />
                    </Route>

                    {authCtx.isLoggedIn && (
                        <>
                            <Route path="/shopping_cart" exact>
                                <Cart />
                            </Route>

                            <Route path="/store" exact>
                                <Store />
                            </Route>

                            <Route path="/store/:productID" exact>
                                <ProductDetails />
                            </Route>
                        </>
                    )}

                    {!authCtx.isLoggedIn && (
                        <Route path="/auth" exact>
                            <Auth />
                        </Route>
                    )}

                    <Route path="*">
                        <h1> Page Not Found! Check Url please... </h1>
                    </Route>
                </Switch>
                <Footer />
            </CartProvider>
        </>
    );
};

export default App;
