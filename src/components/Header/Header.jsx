import React from "react";
import "./Header.scss";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="marquee_text">
          <p>Get Free Delivery On Orders Above Rs.799</p>
        </div>

        <div className="header_wrapper">
          <a href="/" className="header_logo">
            <img src="" alt="" />
            Logo
          </a>

          <div className="header_links_wrapper">
            <ul className="header_links">
              <Link className="link-tg" to={"/"}>
                <li className="link">Home</li>
              </Link>
              {/* <li className="link">About Us</li> */}
              <Link className="link-tg" to={"/contact"}>
                <li className="link">Contact</li>
              </Link>
              {/* <li className="link">Category</li> */}
              <Link className="link-tg" to={"/products"}>
                <li className="link">Products</li>
              </Link>
            </ul>
          </div>

          <div className="header_icons_wrapper">
            <div>
              <span className="header_icons">
                <FaSearch />
              </span>
              <span className="header_icons">
                <FaUserAlt />
              </span>
              <span className="header_icons">
                <FaShoppingCart />
              </span>
            </div>
          </div>
        </div>

        <div className="header_links_wrapper_mobile">
          <ul className="header_links_mobile">
            <li className="link">Home</li>
            <li className="link">About Us</li>
            <li className="link">Contact Us</li>
            <li className="link">Category</li>
            <li className="link">Products</li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
