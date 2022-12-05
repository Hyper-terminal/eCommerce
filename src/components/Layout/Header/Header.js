import React, { useContext } from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import cartIcon from "../../../assets/icons/cart.svg";
import logo from "../../../assets/logo/png/logo-no-background.png";
import CartContext from "../../../store/cart-context";

const Header = (props) => {
    const cartCtx = useContext(CartContext);

    let totalCartItem = 0;
    cartCtx.items.forEach((item) => (totalCartItem += item.quantity));

    const cartHandler = () => {
        props.onCartToggle();
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
                    <Nav.Link className={classes.header__link}>Home</Nav.Link>
                    <Nav.Link className={classes.header__link}>Store</Nav.Link>
                    <Nav.Link className={classes.header__link}>About</Nav.Link>
                </Nav>
                <div
                    style={{ height: "2rem" }}
                    onClick={cartHandler}
                    className={`d-flex ${classes.cartIcon}`}
                >
                    <img
                        className="h-100 w-100"
                        src={cartIcon}
                        alt="shopping cart"
                    />
                    <h4 className="ms-2 text-primary">{totalCartItem}</h4>
                </div>
            </Navbar>
        </header>
    );
};

export default Header;
