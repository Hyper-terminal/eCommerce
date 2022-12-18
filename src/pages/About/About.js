import React from "react";
import classes from "./About.module.css";

const About = () => {
    return (
        <>
            <section className={classes.home}>
                <div className={classes.container}>
                    <div className={classes.aboutHeading}>
                        About Us <br />
                    </div>
                    <div className={classes.aboutPara}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
