import React, { useContext, useState } from "react";
import { Form, Button } from "react-bootstrap";
import classes from "./AuthForm.module.css";
import UICard from "../UI/Card/UICard";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const api_key = process.env.REACT_APP_SECRET_KEY;

const AuthForm = () => {
    const authCtx = useContext(AuthContext);
    const history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    const [isLogin, setIsLogin] = useState(true);
    const [form, setForm] = useState({
        email: "",
        password: "",
    });

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = async (event) => {
        event.preventDefault();
        setIsLoading(true);
        try {
            let url;
            if (isLogin) {
                url =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
                    api_key;
            } else {
                url =
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
                    api_key;
            }

            const res = await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: form.email,
                    password: form.password,
                    returnSecureToken: true,
                }),
            });

            setIsLoading(false);
            const data = await res.json();

            if (res.ok) {
                //able to connect to server
                authCtx.onLogin(data);
                history.replace("/store");
            } else {
                // got error throw it to catch block
                throw new Error(data.error.message);
            }
        } catch (error) {
            alert(error);
        }
    };

    const inputHandler = (event) => {
        setForm((prev) => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            };
        });
    };

    return (
        <UICard className={classes.container}>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        name="email"
                        value={form.email}
                        type="email"
                        placeholder="Enter email"
                        onChange={inputHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        name="password"
                        value={form.password}
                        onChange={inputHandler}
                        type="password"
                        placeholder="Enter password"
                    />
                </Form.Group>
                {isLoading && <p className="m-auto text-info">Loading...</p>}

                {!isLoading && (
                    <>
                        <Button
                            className="w-100"
                            variant="success"
                            type="submit"
                        >
                            {isLogin ? "Login" : "Signup"}
                        </Button>

                        <Button
                            variant="outline-dark"
                            className="w-100 border"
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin
                                ? "Create new account"
                                : "Login with existing account"}
                        </Button>
                    </>
                )}
            </Form>
        </UICard>
    );
};

export default AuthForm;
