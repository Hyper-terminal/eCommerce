import React, { useContext } from "react";
import { Row, Col, Container } from "react-bootstrap";
import CartContext from "../../store/cart-context";
import UICard from "../UI/Card/UICard";
import CartItem from "./CartItem";

const Cart = () => {
    const cartCtx = useContext(CartContext);

    return (
        <section className="h-100 text-center w-100 mt-3" id="cart">
            <h1
                className="text-center fw-bold mb-5"
                style={{ fontFamily: "Metal Mania" }}
            >
                Shopping Cart
            </h1>

            <Container className="rounded p-4 mb-4 shadow w-75">
                <Row className="align-items-center">
                    <Col>
                        <h2 className="fw-bold">Total Amount: </h2>
                    </Col>
                    <Col>
                        <h2 className="fw-bold">$ {cartCtx.cartTotalAmount}</h2>
                    </Col>
                </Row>
            </Container>
            <UICard className="m-auto">
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
                                key={product.id}
                                quantity={product.quantity}
                                price={product.price}
                                imageUrl={product.imageUrl}
                                id={product.id}
                            />
                        );
                    })}
                </Container>
            </UICard>
        </section>
    );
};

export default Cart;
