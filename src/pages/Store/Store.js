import React from "react";
import { Container } from "react-bootstrap";
import Products from "../../components/Products/Products";

const Store = () => {
    return (
        <>
            <section className="mt-5 mb-4">
                <Container className="text-center">
                    <h1>Our Products</h1>
                </Container>
            </section>
            <section>
                <Products />
            </section>
        </>
    );
};

export default Store;
