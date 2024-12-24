import React from "react";
import Logo2 from "/logo/Logo-gray.png";
import Facebook from "/icons/facebook.png";
import Twitter from "/icons/twitter.png";
import Linkedin from "/icons/linkedin.png";
import Instagram from "/icons/instagram.png";
import "../../styles/css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={Logo2} alt="logo" />
        <p>Throw paperwork into the trash.</p>
      </div>

      <div className="footer-right">
        <ul>
          <li>
            <a href="/">
              <img src={Facebook} alt="facebook" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Twitter} alt="twitter" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Linkedin} alt="linkedin" />
            </a>
          </li>
          <li>
            <a href="/">
              <img src={Instagram} alt="instagram" />
            </a>
          </li>
        </ul>
        <p className="copyright">
          &copy; Copyright &copy; Genesys DevStudio . All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
