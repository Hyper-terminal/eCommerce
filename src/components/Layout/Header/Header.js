import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import cartIcon from "../../../assets/icons/cart.svg";
import logo from "../../../assets/logo/png/logo-no-background.png";
import CartContext from "../../../store/cart-context";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../../store/auth-context";

const Header = () => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    let totalCartItem = 0;
    cartCtx.items.forEach((item) => (totalCartItem += item.quantity));

    const logoutHandler = () => {
        authCtx.onLogout();
        history.replace("/home");
    };

    return (
        <header>
            <Navbar
                expand="sm"
                className={`${classes.header} h-100 shadow justify-content-between`}
            >
                <div>
                    <img
                        className="ms-5"
                        height="50"
                        width="70"
                        src={logo}
                        alt="brand name the generics"
                    />
                </div>
                <Nav className="ms-5">
                    <NavLink
                        exact
                        to="/home"
                        activeClassName={classes.header__link_active}
                        className={classes.header__link}
                    >
                        Home
                    </NavLink>

                    {authCtx.isLoggedIn && (
                        <NavLink
                            exact
                            activeClassName={classes.header__link_active}
                            to="/store"
                            className={classes.header__link}
                        >
                            Store
                        </NavLink>
                    )}

                    <NavLink
                        exact
                        activeClassName={classes.header__link_active}
                        to="/about"
                        className={classes.header__link}
                    >
                        About
                    </NavLink>

                    {authCtx.isLoggedIn && (
                        <NavLink
                            exact
                            activeClassName={classes.header__link_active}
                            to="/contact"
                            className={classes.header__link}
                        >
                            Contact
                        </NavLink>
                    )}
                </Nav>

                {!authCtx.isLoggedIn && (
                    <NavLink to="/auth" className="me-5">
                        Login
                    </NavLink>
                )}

                {authCtx.isLoggedIn && (
                    <div className="d-flex">
                        <NavLink
                            activeClassName={classes.header__link_active}
                            to="/shopping_cart"
                            style={{ height: "2rem" }}
                            className={`d-flex ${classes.cartIcon}`}
                        >
                            <img
                                className="h-100 w-100"
                                src={cartIcon}
                                alt="shopping cart"
                            />
                            <h4 className="ms-2 text-primary">
                                {totalCartItem}
                            </h4>
                        </NavLink>
                        <div className="me-5">
                            <NavLink onClick={logoutHandler} to="/">
                                Logout
                            </NavLink>
                        </div>
                    </div>
                )}
            </Navbar>
        </header>
    );
};

export default Header;
