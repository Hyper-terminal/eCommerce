import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Navbar
        expand="sm"
        className={`${classes.header} shadow justify-content-center`}
      >
        <Nav>
          <Nav.Link className={classes.header__link}>Home</Nav.Link>
          <Nav.Link className={classes.header__link}>Store</Nav.Link>
          <Nav.Link className={classes.header__link}>About</Nav.Link>
        </Nav>
      </Navbar>
      <h1 className={classes.header__summary}>The Generics</h1>
    </header>
  );
};

export default Header;
