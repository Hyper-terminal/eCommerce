import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import SingleProduct from "./SingleProduct";

const ProductList = (props) => {
    return (
        <Container>
            <Row>
                {props.products.map((item, index) => (
                    <Col lg={4} md={12} key={item.id} className="text-center">
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
    );
};

export default ProductList;
