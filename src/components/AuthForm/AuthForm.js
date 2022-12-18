import React, { useContext, useState } from "react";
import { Button, Container } from "react-bootstrap";
import classes from "./AuthForm.module.css";
import AuthContext from "../../store/auth-context";
import { useHistory } from "react-router-dom";

const api_key = process.env.REACT_APP_FIREBASE_API;

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
        <section className={classes.container}>
            <Container className="text-center mt-5 mb-4">
                <h1>{isLogin ? "Sign In" : "Sign Up"}</h1>
                <div className="opacity-75">Hey there, fill out this form</div>
            </Container>
            <Container>
                <div>
                    <form
                        onSubmit={submitHandler}
                        className="d-flex shadow p-5 rounded w-75 me-auto ms-auto flex-column text-md-left"
                    >
                        <div className="d-flex  flex-column">
                            <div className="w-100">
                                <label className="d-block text-uppercase">
                                    Email address
                                </label>
                                <input
                                    value={form.email}
                                    type="email"
                                    className="text-md-left mb-4 mt-2 p-2 border border-secondary  opacity-75 w-100 d-block"
                                    placeholder="Enter email"
                                    onChange={inputHandler}
                                />
                            </div>
                            <div className="w-md-100">
                                <label className="d-block text-uppercase">
                                    Password
                                </label>
                                <input
                                    onChange={inputHandler}
                                    value={form.password}
                                    type="password"
                                    className="text-md-left mb-4 p-2 mt-2 border border-secondary  opacity-75 w-100 d-block"
                                    placeholder="Enter your phone number"
                                />
                            </div>

                            {isLoading && (
                                <div className="text-center text-primary">
                                    Please wait ! Loading...
                                </div>
                            )}

                            {!isLoading && (
                                <div>
                                    <button
                                        className={classes.submitButton}
                                        type="submit"
                                    >
                                        {isLogin ? "Login" : "Signup"}
                                    </button>
                                    <div
                                        className={classes.toggler}
                                        onClick={switchAuthModeHandler}
                                    >
                                        {isLogin
                                            ? "Create new account?"
                                            : "Have an accounr? Login"}
                                    </div>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            </Container>
        </section>
    );
};

export default AuthForm;
