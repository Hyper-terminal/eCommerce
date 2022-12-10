import React from "react";
import UICard from "../UI/Card/UICard";
import { Row, Col } from "react-bootstrap";
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
            <UICard className="text-center m-auto">
                <Row sm={1} md={2} lg={3}>
                    {props.products.map((item) => (
                        <Col
                            key={item.id}
                            className="mb-2 d-flex justify-content-center"
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
            </UICard>
        </>
    );
};

export default ProductList;
