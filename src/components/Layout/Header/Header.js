import React, { useContext } from "react";
import { Nav, Navbar, Container } from "react-bootstrap";
import logo from "../../../assets/logo-no-background.png";
import CartContext from "../../../store/cart-context";
import { NavLink, useHistory } from "react-router-dom";
import AuthContext from "../../../store/auth-context";
import classes from "./Header.module.css";

const Header = () => {
    const cartCtx = useContext(CartContext);
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    let totalCartItem = 0;
    cartCtx.items.forEach((item) => (totalCartItem += item.quantity));

    const logoutHandler = () => {
        authCtx.onLogout();
        history.replace("/auth");
    };

    return (
        <header>
            <Navbar className="p-4" bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img
                            src={logo}
                            alt="the generics"
                            height="40"
                            width="50"
                        />
                    </Navbar.Brand>
                    {authCtx.isLoggedIn && (
                        <div className="ms-auto me-2 d-lg-none d-sm-inline-flex justify-content-center align-items-center pt-1 pb-2 bg-dark text-white  ps-4 pe-4 ">
                            Cart {totalCartItem}
                        </div>
                    )}
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link>
                                <NavLink
                                    activeClassName={classes.active}
                                    className={classes.link}
                                    to="/home"
                                >
                                    Home
                                </NavLink>
                            </Nav.Link>
                            {authCtx.isLoggedIn && (
                                <Nav.Link>
                                    <NavLink
                                        activeClassName={classes.active}
                                        className={classes.link}
                                        to="/store"
                                    >
                                        Store
                                    </NavLink>
                                </Nav.Link>
                            )}
                            <Nav.Link>
                                <NavLink
                                    activeClassName={classes.active}
                                    className={classes.link}
                                    to="/about"
                                >
                                    About
                                </NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink
                                    activeClassName={classes.active}
                                    className={classes.link}
                                    to="/contact"
                                >
                                    Contact
                                </NavLink>
                            </Nav.Link>
                        </Nav>
                        <hr className="d-lg-none" />
                        <nav
                            className={`${classes.smallHide} ms-auto d-lg-inline-block`}
                        >
                            <Nav.Link
                                className=" d-lg-inline-block"
                                onClick={logoutHandler}
                            >
                                {authCtx.isLoggedIn ? "Logout" : "Login"}
                            </Nav.Link>
                            {authCtx.isLoggedIn && (
                                <div className=" d-lg-inline-block  pt-1 pb-2  bg-dark text-white  ps-4 pe-4 ms-3">
                                    Cart {totalCartItem}
                                </div>
                            )}
                        </nav>
                        <Nav.Link className="d-lg-none" onClick={logoutHandler}>
                            {authCtx.isLoggedIn ? "Logout" : "Login"}
                        </Nav.Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;
