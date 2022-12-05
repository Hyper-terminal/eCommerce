import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";
import cartIcon from "../../../assets/icons/cart.svg";

const Header = (props) => {
  const cartHandler = () => {
    props.onCartToggle();
  };

  return (
    <header>
      <Navbar
        expand="sm"
        className={`${classes.header} shadow justify-content-between`}
      >
        <div>
          <img alt="brand name the generics" />
        </div>
        <Nav className="ms-5">
          <Nav.Link className={classes.header__link}>Home</Nav.Link>
          <Nav.Link className={classes.header__link}>Store</Nav.Link>
          <Nav.Link className={classes.header__link}>About</Nav.Link>
        </Nav>
        <div
          style={{ height: "2rem" }}
          onClick={cartHandler}
          className={classes.cartIcon}
        >
          <img className="h-100 w-100" src={cartIcon} alt="shopping cart" />
        </div>
      </Navbar>
    </header>
  );
};

export default Header;
