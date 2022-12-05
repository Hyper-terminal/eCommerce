import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import classes from "./CartItem.module.css";

const CartItem = (props) => {
  return (
    <>
      <hr />
      <Row className="justify-content-center align-items-center">
        <Col>
          <img
            className={`rounded border shadow ${classes.cart_product_image}`}
            src={props.imageUrl}
            alt="Your items added to cart"
          />
        </Col>
        <Col>
          <h3 className="fw-bold">x{props.quantity}</h3>
        </Col>
        <Col>
          <h3 className="fw-bold">${props.price}</h3>
          <Button variant="danger">Remove</Button>
        </Col>
      </Row>
    </>
  );
};

export default CartItem;
