import React from "react";

const UICard = (props) => {
    let myClassName = props.className + "";

    return (
        <div
            style={{ backgroundColor: "#e1e8ec" }}
            className={`${myClassName} rounded border shadow w-75 p-3`}
        >
            {props.children}
        </div>
    );
};

export default UICard;
