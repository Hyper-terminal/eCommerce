import React, { useContext } from "react";
import classes from "./Home.module.css";
import { NavLink } from "react-router-dom";
import { Col, Row, Container } from "react-bootstrap";
import FeaturedProducts from "./FeaturedProducts";
import AuthContext from "../../store/auth-context";

const Home = () => {
    const authCtx = useContext(AuthContext);
    const redirectUrl = authCtx.isLoggedIn ? "/store" : "/auth";

    return (
        <>
            <section className={classes.home}>
                <div className={classes.container}>
                    <NavLink className={classes.homeButton} to={redirectUrl}>
                        EXPLORE
                    </NavLink>
                </div>

                {/* some heading or content */}

                <div className={classes.contentContainer}>
                    <div className={classes.mainHeading}>
                        <h1>Main Heading</h1>
                        <div>
                            Buisness and products
                            <br />
                        </div>
                    </div>
                    <div className={classes.divider}></div>

                    <Container className="mt-4 mb-5">
                        <Row>
                            <Col md={6} sm={12}>
                                <p className="opacity-75">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Eaque alias dignissimos
                                    labore nulla cupiditate rem, quaerat illo
                                    minima quidem numquam accusamus, non, dolore
                                    amet blanditiis corrupti provident
                                    voluptatibus ipsam. Deserunt?
                                </p>
                            </Col>
                            <Col md={6} sm={12}>
                                <p className="opacity-75">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Magni doloribus est
                                    perspiciatis blanditiis delectus dolorum,
                                    quaerat obcaecati cumque voluptate eaque
                                    nemo quod amet nam neque, iure vel.
                                    Consequuntur, ducimus quis!
                                </p>
                            </Col>
                        </Row>
                    </Container>
                </div>

                {/* featured products */}
                <FeaturedProducts />
            </section>
        </>
    );
};

export default Home;
