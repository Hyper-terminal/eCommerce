import React, { useState, useEffect, useCallback } from "react";
import { Button } from "react-bootstrap";
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
    const [timeToken, setTimeToken] = useState(null);

    const fetchMoviesHandler = useCallback(async () => {
        try {
            setIsLoading(true);

            if (timeToken !== null) return;

            const response = await fetch("https://swapi.dev/api/film");
            const data = await response.json();
            console.log(data);

            setIsLoading(false);
        } catch (error) {
            console.log("Something went wrong ....Retrying");

            const timeId = setTimeout(() => {
                fetchMoviesHandler();
            }, 3000);

            setTimeToken(timeId);
        }
    }, [timeToken]);

    useEffect(() => {
        fetchMoviesHandler();
    }, [fetchMoviesHandler]);

    const spinnerHandler = () => {
        setIsLoading(false);
    };

    const cancelFetchHandler = () => {
        clearTimeout(timeToken);
    };

    return (
        <>
            {isLoading && (
                <div className={classes.overlay}>
                    <div onClick={spinnerHandler}>
                        <Loader message="loading..." />
                        <Button onClick={cancelFetchHandler} variant="danger">
                            Cancel fetch request
                        </Button>
                    </div>
                </div>
            )}

            <Button onClick={fetchMoviesHandler}>Fetch Movies</Button>

            <ProductList title="Music" products={productsArr} />
        </>
    );
};

export default Products;
