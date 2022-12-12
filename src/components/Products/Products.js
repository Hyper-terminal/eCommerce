import React, { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import Loader from "../UI/Loader/Loader";
import ProductList from "./ProductList";
import classes from "./Products.module.css";

const Products = () => {
    const [isLoading, setIsLoading] = useState(false);

    const cartCtx = useContext(CartContext);

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

            <ProductList title="Music" products={cartCtx.products} />
        </>
    );
};

export default Products;
