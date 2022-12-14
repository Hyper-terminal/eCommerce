import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Welcome.module.css";

const Welcome = () => {
    return (
        <div className={classes.container}>
            <img
                className={classes.image}
                src="https://images.unsplash.com/photo-1489769002049-ccd828976a6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
                alt="the generics landing page"
            />

            <NavLink exact to="/home">
                <div className={classes.link}>
                    <p>V</p>
                    <p>I</p>
                    <p>S</p>
                    <p>I</p>
                    <p>T</p>
                    <br />
                    <p>S</p>
                    <p>T</p>
                    <p>O</p>
                    <p>R</p>
                    <p>E</p>
                </div>
            </NavLink>
        </div>
    );
};

export default Welcome;
