import React, { useEffect, useState } from "react";
import "./Header.scss";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const [user, setUser] = useState();
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  useEffect(() => {
    setUser(localStorage.getItem("loginUser"));
  }, []);

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
              {/* <span className="header_icons">
                <FaSearch />
              </span> */}
              <Link to={user ? "/profile" : "/login"} className="header_icons">
                <FaUserAlt />
              </Link>
              <span className="header_icons" onClick={ToggleSidebar}>
                <FaShoppingCart />
              </span>
            </div>
          </div>
        </div>

        <div className="header_links_wrapper_mobile">
          <ul className="header_links_mobile">
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
      </header>
      <div>
        <div className={`sidebar ${isOpen === true ? "active" : ""}`}>
          <div className="sd-header">
            <h2 className="mb-0">Cart</h2>
            <div className="btn btn-primary" onClick={ToggleSidebar}>
              <i className="fa fa-times">Close</i>
            </div>
          </div>
          <div className="sd-body">
            <ul>
              <li>
                <a href="!#" className="sd-link">
                  Order Item 3
                </a>
              </li>
              <li>
                <a href="!#" className="sd-link">
                  Order Item 4
                </a>
              </li>
              <li>
                <a href="!#" className="sd-link">
                  Order Item 5
                </a>
              </li>
              <li>
                <a href="!#" className="sd-link">
                  Order Item 6
                </a>
              </li>
              <li>
                <a href="!#" className="sd-link">
                  Order Item 7
                </a>
              </li>
              <li>
                <a href="!#" className="sd-link">
                  Order Item 8
                </a>
              </li>
            </ul>
          </div>

          <Link to={"/checkout"} className="checkout-btn">
            Proceed to Checkout
          </Link>
        </div>
        <div
          className={`sidebar-overlay ${isOpen === true ? "active" : ""}`}
          onClick={ToggleSidebar}
        ></div>
      </div>
    </div>
  );
};

export default Header;
