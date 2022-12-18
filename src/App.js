import React, { Suspense, useContext } from "react";
import CartProvider from "./store/CartProvider";
import { Redirect, Route, Switch } from "react-router-dom";
import AuthContext from "./store/auth-context";
import LoadingSpinner from "./components/UI/LoadingSpinner/LoadingSpinner";
import Header from "./components/Layout/Header/Header";
import Footer from "./components/Layout/Footer/Footer";

const About = React.lazy(() => import("./pages/About/About"));
const Home = React.lazy(() => import("./pages/Home/Home"));
const Store = React.lazy(() => import("./pages/Store/Store"));
const Cart = React.lazy(() => import("./components/Cart/Cart"));
const Contact = React.lazy(() => import("./pages/Contact/Contact"));
const ProductDetails = React.lazy(() =>
    import("./pages/ProductDetails/ProductDetails")
);
const Auth = React.lazy(() => import("./pages/Auth/Auth"));

const App = () => {
    const authCtx = useContext(AuthContext);

    return (
        <CartProvider>
            <Suspense fallback={<LoadingSpinner />}>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>

                    <Route exact path="/home">
                        <Header />
                        <Home />
                        <Footer />
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
                        <Header />{" "}
                        <h1> Page Not Found! Check Url please... </h1>{" "}
                        <Footer />
                    </Route>
                </Switch>
            </Suspense>
        </CartProvider>
    );
};

export default App;
