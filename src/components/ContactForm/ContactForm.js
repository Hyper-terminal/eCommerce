import React, { useRef } from "react";
import UICard from "../UI/Card/UICard";
import { Form, Button } from "react-bootstrap";
import classes from "./ContactForm.module.css";

function ContactForm() {
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

        // clear fields
        nameRef.current.value = "";
        emailRef.current.value = "";
        phoneRef.current.value = "";
    };

    return (
        <UICard className={classes.container}>
            <Form onSubmit={submitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        ref={nameRef}
                        type="text"
                        placeholder="Enter name"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        ref={emailRef}
                        type="email"
                        placeholder="Enter email"
                    />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        ref={phoneRef}
                        type="tel"
                        placeholder="Phone number"
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </UICard>
    );
}

export default ContactForm;
