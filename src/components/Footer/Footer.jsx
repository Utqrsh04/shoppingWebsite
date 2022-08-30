import React from "react";
import "./Footer.scss";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer_section_wrapper">
        <div className="footer_section">
          <div>
            <h6 className="footer-heading">Informations</h6>
            <ul className="footer-link">
              <li>
                <a href="#!">Contact Us</a>
              </li>
              <li>
                <a href="#!">Return Policy</a>
              </li>
              <li>
                <a href="#!">Terms of Services</a>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="footer-heading">Help</h6>
            <ul className="footer-link">
              <Link classNameName="link-tg" to={"/signup"}>
                <li classNameName="link">Register</li>
              </Link>
              <Link classNameName="link-tg" to={"/login"}>
                <li classNameName="link">Sign In</li>
              </Link>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="footer-link">
            <h6 className="footer-heading">Contact us</h6>
            <p className="contact-info">Need help ?</p>
            <p className="contact-info">+XX XX-XX-XX-XX-XX</p>
            <div>
              <ul className="list-inline">
                <li className="list-inline-item">
                  <a href="#!">
                    <FaFacebookSquare classNameName="facebook footer-social-icon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <FaTwitterSquare classNameName="twitter footer-social-icon" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!">
                    <FaInstagram classNameName="instagram footer-social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="copyright">
          <p className="footer-alt">2022 © Society, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
