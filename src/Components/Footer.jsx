import React from "react";
import "../css/bulma.css";
import "../css/style.css";
import DH from "../images/DH.png"

const Footer = () => {
  return (
    <footer className="footer fa">
      <div className="content has-text-centered">
        <p>Powered by</p>
        <img className="foton" src={DH} />
        
      </div>
    </footer>
  );
};

export default Footer;
