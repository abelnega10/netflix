import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__links">
          <a href="#" className="footer__link">
            Questions? Contact us.
          </a>
          <a href="#" className="footer__link">
            Terms of Use
          </a>
          <a href="#" className="footer__link">
            Privacy
          </a>
          <a href="#" className="footer__link">
            Cookie Preferences
          </a>
          <a href="#" className="footer__link">
            Corporate Information
          </a>
        </div>
        <div className="footer__social">
          <a href="#" className="footer__social-link">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="#" className="footer__social-link">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="#" className="footer__social-link">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
        </div>
        <div className="footer__info">
          <span className="footer__text">Netflix India</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
