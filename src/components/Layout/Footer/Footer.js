import React from "react";
import classes from "./Footer.module.css";
import instagram from "../../../assets/icons/instagram.svg";
import youtube from "../../../assets/icons/youtube.svg";
import facebook from "../../../assets/icons/facebook.svg";

const Footer = () => {
  return (
    <footer
      className={`d-flex w-100 mt-4 flex-row align-items-center justify-content-between p-5 shadow border ${classes.footer}`}
    >
      <h1>The Generics</h1>
      <div className="d-flex me-5">
        <img height="50" width="50" src={instagram} alt="instagram" />
        <img height="50" width="50" src={youtube} alt="youtube" />
        <img height="50" width="50" src={facebook} alt="facebook" />
      </div>
    </footer>
  );
};

export default Footer;
