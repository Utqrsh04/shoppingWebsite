import React, { useEffect, useState } from "react";
import "./Header.scss";
import { FaUserAlt, FaShoppingCart } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { CartState } from "../../context/context";
import toast, { Toaster } from "react-hot-toast";

const Header = () => {
  const [isOpen, setIsopen] = useState(false);
  const [user, setUser] = useState();
  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  const {
    state: { cart },
    dispatch,
  } = CartState();

  useEffect(() => {
    setUser(localStorage.getItem("loginUser"));
  }, []);

  const incrementCount = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        _id: id,
        qty: qty + 1,
      },
    });
  };

  const decrementCount = (id, qty) => {
    dispatch({
      type: "CHANGE_CART_QTY",
      payload: {
        _id: id,
        qty: qty - 1,
      },
    });
  };

  let cartQuantity = 0;
  for (let i = 0; i < cart.length; i++) {
    cartQuantity += cart[i].qty;
  }

  const logout = () => {
    localStorage.removeItem("loginUser");
    setUser(undefined);
    toast.success("Logout Successfull");
  };

  return (
    <div>
      <Toaster />
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
              <span className="header_icons cart_icon" onClick={ToggleSidebar}>
                <FaShoppingCart />
                <span>{cart && cartQuantity}</span>
              </span>

              {user && (
                <span onClick={logout} className="logout-btn">
                  Logout
                </span>
              )}
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
            <div className="btn-close" onClick={ToggleSidebar}>
              <IoMdClose className="btn-close-icon" />
            </div>
          </div>
          <div className="sd-body">
            <ul>
              {cart &&
                cart.map((e) => (
                  <li key={e._id}>
                    <div className="sd-link">
                      <div className="order_tile">
                        <img src={e.cover_image} alt="" />
                        <div className="sidebar-product_desc">
                          <h4>{e.product_name}</h4>
                          <h6>Rs.{e.price}</h6>
                        </div>
                      </div>
                      <div className="sidebar_count_btns">
                        <button
                          disabled={e.qty === 1}
                          onClick={() => decrementCount(e._id, e.qty)}
                        >
                          -{" "}
                        </button>
                        {e.qty}
                        <button onClick={() => incrementCount(e._id, e.qty)}>
                          +{" "}
                        </button>
                      </div>
                      <div
                        className="remove-product-div"
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: e,
                          })
                        }
                      >
                        <IoMdClose className="remove-product-icon" />
                      </div>
                    </div>
                    {/* <div className="close-icon-div">
                      <IoMdClose className="close-icon" />
                    </div> */}
                  </li>
                ))}
            </ul>
          </div>

          <div className="sd-text">
            {cart && cart.length > 0 ? (
              <Link to={"/checkout"} className="checkout-btn">
                Proceed to Checkout
              </Link>
            ) : (
              <h2>No Items in Cart</h2>
            )}
          </div>
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
