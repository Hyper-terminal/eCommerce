import React, { useState, useRef } from "react";
import { Container } from "react-bootstrap";
import classes from "./ContactForm.module.css";

function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const nameRef = useRef("");
    const emailRef = useRef("");
    const phoneRef = useRef("");

    const submitHandler = async (event) => {
        event.preventDefault();

        const userObj = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
        };

        // store data in db

        await fetch(
            "https://ecommerce-19a26-default-rtdb.asia-southeast1.firebasedatabase.app/contact_user.json",
            {
                method: "post",
                body: JSON.stringify(userObj),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        setIsSubmitted(true);

        // clear fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
    };

    return (
        <section className={classes.container}>
            <Container className="text-center mt-5 mb-4">
                <h1>Get in touch</h1>
                <div className="opacity-75">Hey there, fill out this form</div>
            </Container>
            <Container>
                <div>
                    <form
                        onSubmit={submitHandler}
                        className="d-flex w-75 me-auto ms-auto flex-column text-md-left"
                    >
                        <div className="d-flex  flex-column">
                            <div className="w-100">
                                <label className="d-block text-uppercase">
                                    Name
                                </label>
                                <input
                                    ref={nameRef}
                                    type="text"
                                    className="text-md-left mb-4 p-2 border border-secondary rounded opacity-75 w-100 d-block"
                                    placeholder="Enter your name"
                                />
                            </div>
                            <div className="md-w-100">
                                <label className="d-block text-uppercase">
                                    Email
                                </label>
                                <input
                                    ref={emailRef}
                                    type="email"
                                    className="text-md-left mb-4 p-2 border border-secondary rounded opacity-75 w-100 d-block"
                                    placeholder="Enter your email"
                                />
                            </div>{" "}
                            <div className="md-w-100">
                                <label className="d-block text-uppercase">
                                    Phone
                                </label>
                                <input
                                    ref={phoneRef}
                                    type="tel"
                                    className="text-md-left mb-4 p-2 border border-secondary rounded opacity-75 w-100 d-block"
                                    placeholder="Enter your phone number"
                                />
                            </div>
                            <button
                                className={classes.submitButton}
                                type="submit"
                            >
                                SUBMIT
                            </button>
                        </div>
                    </form>

                    {isSubmitted && (
                        <div className="text-center mt-5">
                            Thank you! Your submission has been received!
                        </div>
                    )}
                </div>
            </Container>
        </section>
    );
}

export default ContactForm;
