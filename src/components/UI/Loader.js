import React from "react";
import { Spinner, Button } from "react-bootstrap";
import classes from "./Loader.module.css";

const Loader = () => {
    return (
        <>
            <div className={classes.overlay}>
                <Button className={classes.spinner} variant="success" disabled>
                    <Spinner
                        as="span"
                        animation="grow"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                    />
                    Loading...
                </Button>
            </div>
        </>
    );
};

export default Loader;
