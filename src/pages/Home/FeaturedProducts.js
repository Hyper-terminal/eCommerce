import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SingleProduct from "../../components/Products/SingleProduct";

const FeaturedProducts = () => {
    return (
        <>
            <div className="mx-auto mt-5 text-center w-100">
                <div className="mb-5">
                    <h3 className="display-5 mt-3 mb-2 ">Featured Products</h3>
                    <div className="opacity-75 h4 mt-4">
                        Check out new products
                    </div>
                </div>
            </div>
            <Container>
                <Row>
                    <Col className="text-center" lg={4} md={12}>
                        <SingleProduct
                            title="colors"
                            price="100"
                            imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                        />
                    </Col>
                    <Col className="text-center" lg={4} md={12}>
                        <SingleProduct
                            title="colors"
                            price="100"
                            imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                        />
                    </Col>
                    <Col className="text-center" lg={4} md={12}>
                        <SingleProduct
                            title="colors"
                            price="100"
                            imageUrl="https://prasadyash2411.github.io/ecom-website/img/Album%201.png"
                        />
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default FeaturedProducts;
