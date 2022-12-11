import React from "react";
import classes from "./UICard.module.css";
const UICard = (props) => {
    let myClassName = props.className + "";

    return (
        <div
            className={`${myClassName} ${classes.container} rounded border shadow p-3`}
        >
            {props.children}
        </div>
    );
};

export default UICard;
