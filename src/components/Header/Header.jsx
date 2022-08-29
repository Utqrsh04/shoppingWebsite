import React from "react";
import "./Header.scss";
import { FaUserAlt, FaSearch, FaShoppingCart } from "react-icons/fa";

const Header = () => {
  return (
    <div>
      <header className="header">
        <marquee className="marquee_text" behavior="" direction="">
          Get Free Delivery On Orders Above Rs.799
        </marquee>

        <div className="header_wrapper">
          <div className="header_logo">
            <img src="" alt="" />
            Logo
          </div>

          <div className="header_links_wrapper">
            <ul className="header_links">
              <li className="link">Home</li>
              <li className="link">About Us</li>
              <li className="link">Contact Us</li>
              <li className="link">Category</li>
              <li className="link">Products</li>
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
