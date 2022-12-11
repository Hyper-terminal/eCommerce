import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import UICard from "../Card/UICard";

const MovieForm = () => {
    const [formData, setFormData] = useState({
        title: "",
        release_date: "",
        opening_text: "",
    });

    const formInputHandler = (e) => {
        setFormData((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            };
        });
    };

    const formSubmitHandler = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <UICard>
            <Form onSubmit={formSubmitHandler}>
                <Form.Group className="mb-3">
                    <Form.Label>Title</Form.Label>
                    <Form.Control
                        name="title"
                        type="text"
                        placeholder="Enter title"
                        value={formData.title}
                        onChange={formInputHandler}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Opening Text</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        value={formData.opening_text}
                        onChange={formInputHandler}
                        name="opening_text"
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Form.Label>Release Date</Form.Label>
                    <Form.Control
                        name="release_date"
                        type="date"
                        placeholder="Date"
                        value={formData.release_date}
                        onChange={formInputHandler}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </UICard>
    );
};

export default MovieForm;
