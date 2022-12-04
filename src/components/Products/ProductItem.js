import React from "react";
import { Card, Button, Container, Nav } from "react-bootstrap";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  return (
    <Card
      className="ms-2 me-2 h-100 shadow-lg border-0"
      style={{ width: "18rem" }}
    >
      <Card.Body>
        <h3
          className={`${classes.product__title} text-center fw-bold fs-5 mb-4`}
        >
          {props.title}{" "}
        </h3>

        <Card.Img className={classes.product_image} src={props.imageUrl} />

        <Card.Text className="d-inline-block ms-3 fs-5 fw-bold">
          ${props.price}
        </Card.Text>
        <Card.Link
          className={`${classes.product__button} rounded p-2 fw-bold d-inline-block mt-4 ms-5`}
        >
          ADD TO CART
        </Card.Link>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
