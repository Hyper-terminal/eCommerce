import React from "react";
import instagram from "../../../assets/icons/instagram.svg";
import youtube from "../../../assets/icons/youtube.svg";
import facebook from "../../../assets/icons/facebook.svg";
import { Container } from "react-bootstrap";
import logo from "../../../assets/logo-no-background.png";

const Footer = () => {
    return (
        <Container className="mt-5">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <a className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <img
                            height="50"
                            width="50"
                            src={logo}
                            alt="The generics store"
                        />
                    </a>
                    <span className="mb-3 mb-md-0 text-muted">
                        © 2022 The Generics, Inc
                    </span>
                </div>

                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <img
                                height="50"
                                width="50"
                                src={youtube}
                                alt="youtube"
                            />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <img
                                height="50"
                                width="50"
                                src={instagram}
                                alt="instagram"
                            />
                        </a>
                    </li>
                    <li className="ms-3">
                        <a className="text-muted" href="#">
                            <img
                                height="50"
                                width="50"
                                src={facebook}
                                alt="facebook"
                            />
                        </a>
                    </li>
                </ul>
            </footer>
        </Container>
    );
};

export default Footer;
