import React from "react";
import "./Footer.scss";
import { FaFacebookSquare, FaTwitterSquare, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer class="footer_section_wrapper">
        <div class="footer_section">
          <div>
            <h6 class="footer-heading">Informations</h6>
            <ul class="footer-link">
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
            <h6 class="footer-heading">Help</h6>
            <ul class="footer-link">
              <li>
                <a href="#!">Register</a>
              </li>
              <li>
                <a href="#!">Sign in</a>
              </li>
              <li>
                <a href="#!">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div class="footer-link">
            <h6 class="footer-heading">Contact us</h6>
            <p class="contact-info">Need help ?</p>
            <p class="contact-info">+XX XX-XX-XX-XX-XX</p>
            <div>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <a href="#!">
                    <FaFacebookSquare className="facebook footer-social-icon" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#!">
                    <FaTwitterSquare className="twitter footer-social-icon" />
                  </a>
                </li>
                <li class="list-inline-item">
                  <a href="#!">
                    <FaInstagram className="instagram footer-social-icon" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="copyright">
          <p class="footer-alt">2022 © Society, All Rights Reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
