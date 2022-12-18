import React, { useContext } from "react";
import { Nav, Navbar, Container, NavDropdown, Button } from "react-bootstrap";
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
        history.replace("/auth");
    };

    return (
        <header>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand>
                        <img src={logo} height="30" width="30" />
                    </Navbar.Brand>
                    <div className="ms-auto d-inline-flex justify-content-center align-items-center pt-1 pb-2 d-lg-none bg-dark text-white  ps-4 pe-4 d-inline-block ms-3">
                        Cart {totalCartItem}
                    </div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav>
                            <Nav.Link>
                                <NavLink to="/home">Home</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/store">Store</NavLink>
                            </Nav.Link>
                            <Nav.Link>
                                <NavLink to="/about">About</NavLink>
                            </Nav.Link>
                        </Nav>
                        <hr className="d-lg-none" />
                        <nav className="ms-auto">
                            <Nav.Link
                                className="d-md-none d-lg-inline-block"
                                onClick={logoutHandler}
                            >
                                {authCtx.isLoggedIn ? "Logout" : "Login"}
                            </Nav.Link>
                            <div className="d-md-none d-sm-none d-lg-inline-block d-inline-flex justify-content-center align-items-center pt-1 pb-2  bg-dark text-white  ps-4 pe-4 d-inline-block ms-3">
                                Cart {totalCartItem}
                            </div>
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
