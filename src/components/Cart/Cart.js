import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";

const Cart = () => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx.items);

  return (
    <section className="h-100 text-center w-100 mt-3" id="cart">
      <h1
        className="text-center fw-bold mb-5"
        style={{ fontFamily: "Metal Mania" }}
      >
        Shopping Cart
      </h1>

      <Container sm={2} md={3}>
        <Row>
          <Col>
            <h3 className="fw-bold">Item</h3>
          </Col>
          <Col>
            <h3 className="fw-bold">Quantity</h3>
          </Col>
          <Col>
            <h3 className="fw-bold">Price</h3>
          </Col>
        </Row>

        {cartCtx.items.map((product) => {
          return (
            <CartItem
              key={product.title}
              quantity={product.quantity}
              price={product.price}
              imageUrl={product.imageUrl}
            />
          );
        })}
      </Container>
    </section>
  );
};

export default Cart;
