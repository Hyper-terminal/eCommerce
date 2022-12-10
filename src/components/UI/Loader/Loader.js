import React from "react";
import { Spinner, Button } from "react-bootstrap";
import classes from "./Loader.module.css";

const Loader = (props) => {
    return (
        <>

            <Button className={classes.spinner} variant="success" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                {props.message}
            </Button>

        </>
    );
};

export default Loader;
