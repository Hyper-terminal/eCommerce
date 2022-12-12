import React, { useContext } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import CartContext from "../../store/cart-context";

const ProductDetails = () => {
    const cartCtx = useContext(CartContext);
    const param = useParams();

    const foundProduct = cartCtx.products.find(
        (item) => Number(item.id) === Number(param.productID)
    );

    const addToCartHandler = () => {
        cartCtx.onAddToCart({ ...foundProduct, quantity: 1 });
    };

    return (
        <Container className="border shadow m-auto mt-5 ">
            <Row className="justify-content-center align-items-center">
                <Col sm={12} md={6} className="text-center bg-secondary h-100">
                    <img className="w-50 m-auto img-fluid" src={foundProduct.imageUrl} alt="product details page of The Generics"/>
                </Col>
                <Col sm={12} md={6} className="bg-light p-4">

                    <h1 className="fw-bold text-primary">{foundProduct.title}</h1>
                    <h5 className="text-info">Ratings: 4</h5>
                    <h3 className="text-danger">Price: ${foundProduct.price}</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis laborum cumque facilis tempora ut. Aperiam consequatur animi amet consectetur consequuntur, enim unde hic repudiandae maxime quas nostrum asperiores error nulla.</p>

                    <Button variant="danger" onClick={addToCartHandler}>Add to Cart</Button>
                </Col>
            </Row>
        </Container>
    );
};

export default ProductDetails;
