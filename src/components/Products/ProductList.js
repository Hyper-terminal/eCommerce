import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SingleProduct from "./SingleProduct";

const ProductList = (props) => {
    return (
        <>
            <h3
                style={{ fontFamily: "Metal Mania" }}
                className="text-center fw-bold fs-1 mt-4 mb-4"
            >
                {props.title}
            </h3>
            <Container>
                <Row>
                    {props.products.map((item, index) => (
                        <Col
                            lg={4}
                            md={12}
                            key={item.id}
                            className="text-center"
                        >
                            <SingleProduct
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                id={item.id}
                            />
                        </Col>
                    ))}
                </Row>
            </Container>
        </>
    );
};

export default ProductList;
