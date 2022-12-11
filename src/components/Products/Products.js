import React, { useState } from "react";
import Loader from "../UI/Loader/Loader";
import ProductList from "./ProductList";
import classes from "./Products.module.css";

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
    const [isLoading, setIsLoading] = useState(false);

    const spinnerHandler = () => {
        setIsLoading(false);
    };

    return (
        <>
            {isLoading && (
                <div className={classes.overlay}>
                    <div onClick={spinnerHandler}>
                        <Loader message="loading..." />
                    </div>
                </div>
            )}

            <ProductList title="Music" products={productsArr} />
        </>
    );
};

export default Products;
