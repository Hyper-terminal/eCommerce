import React from "react";
import { Link } from "react-router-dom";
import classes from "./SingleProduct.module.css";

const SingleProduct = (props) => {
    return (
        <div className={`${classes.container} relative w-100 mr-4 ml-4 mb-4`}>
            <Link
                to={`/store/${props.id}`}
                className={classes.link}
                style={{
                    backgroundImage: `url(${props.imageUrl})`,
                }}
            >
                <div className={classes.productDetails}>
                    <div className={classes.productName}>{props.title}</div>
                    <div className={classes.productPrice}>
                        $&nbsp;{props.price}&nbsp;INR
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default SingleProduct;
