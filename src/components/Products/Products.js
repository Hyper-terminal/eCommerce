import React from "react";
import ProductItem from "./ProductItem";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const productsArr = [
    {
        title: "Colors",
        id: 1,
        price: 100,

        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },

    {
        title: "Black and white Colors",
        id: 2,
        price: 50,

        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },

    {
        title: "Yellow and Black Colors",

        price: 70,
        id: 3,
        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },

    {
        title: "Blue Color",
        id: 4,
        price: 100,

        imageUrl:
            "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
];

const Products = () => {
    const fetchMoviesHandler = async () => {
        const responsePromise = await fetch("https://swapi.dev/api/films");
        const response = await responsePromise.json();
        console.log(response);
    };

    fetchMoviesHandler();

    return (
        <>
            <h3
                style={{ fontFamily: "Metal Mania" }}
                className="text-center fw-bold fs-1 mt-4 mb-4"
            >
                Music
            </h3>
            <div className="d-flex justify-content-center w-75 m-auto">
                <Row sm={1} md={2} lg={3}>
                    {productsArr.map((item) => (
                        <Col key={item.id} className="mb-2 ">
                            <ProductItem
                                title={item.title}
                                price={item.price}
                                imageUrl={item.imageUrl}
                                id={item.id}
                            />
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default Products;
