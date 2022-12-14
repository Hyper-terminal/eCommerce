import React, { useContext } from "react";
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
import Auth from "./pages/Auth/Auth";
import AuthContext from "./store/auth-context";
import Welcome from "./pages/Welcome/Welcome";

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <CartProvider>
            <Switch>
                <Route exact path="/">
                    <Welcome />
                </Route>

                <Route exact path="/home">
                    <Header />
                    <Home /> <Footer />
                </Route>

                <Route path="/about" exact>
                    <Header />
                    <About /> <Footer />
                </Route>

                <Route path="/contact" exact>
                    <Header /> <Contact /> <Footer />
                </Route>

                {authCtx.isLoggedIn && (
                    <>
                        <Route path="/shopping_cart" exact>
                            <Header /> <Cart /> <Footer />
                        </Route>

                        <Route path="/store" exact>
                            <Header /> <Store /> <Footer />
                        </Route>

                        <Route path="/store/:productID" exact>
                            <Header /> <ProductDetails /> <Footer />
                        </Route>
                    </>
                )}

                {!authCtx.isLoggedIn && (
                    <Route path="/auth" exact>
                        <Header /> <Auth /> <Footer />
                    </Route>
                )}

                <Route path="*">
                    <Header /> <h1> Page Not Found! Check Url please... </h1>{" "}
                    <Footer />
                </Route>
            </Switch>
        </CartProvider>
    );
};

export default App;
