import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./CheckoutPage.scss";
import { CartState } from "../../context/context";
import { IoMdClose } from "react-icons/io";
import { calculateTotalPrice } from "../../utils/calculateTotalPrice";
import axios from "axios";
import { UserContext } from "../../App";
import Footer from "../../components/Footer/Footer";
import { Link } from "react-router-dom";

function loadScript(src) {
  return new Promise((resolve) => {
    console.log("Inside load script");
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
}

const CheckoutPage = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();

  const user = useContext(UserContext);
  const price = calculateTotalPrice(cart);
  const products = cart;

  const [email, setEmail] = useState(user ? user.email : "");
  const [shippingData, setShippingData] = useState({
    user: "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    postal_code: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const newData = { ...shippingData };
    newData[e.target.id] = e.target.value;
    setShippingData(newData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Clicked", products);

    if (user === null) {
      toast(
        <span className="toast-login">
          Please Login to make payment .
          <br />
          <Link className="login-link" to="/login">
            Click here to Login.
          </Link>
        </span>
      );
      return;
    }
    shippingData.user = user;

    if (
      !email ||
      !shippingData.street ||
      !shippingData.city ||
      !shippingData.state ||
      !shippingData.postal_code ||
      !shippingData.phone_number
    ) {
      toast.error("Please provide all the necessary details");
      return;
    }
    displayRazorpay();
  };

  useEffect(() => {
    const data = localStorage.getItem("shippingData");
    if (data !== null) setShippingData(JSON.parse(data));
  }, []);

  async function displayRazorpay() {
    console.log("razorpay");
    toast.error("Not accepting orders now");
    return;

    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );

    if (!res) {
      toast.error("Are you online?");
      return;
    }
    if (user === undefined || user === null) return;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    const tid = toast.loading("Creating your Order...");

    const data = await axios.post(
      "https://ecommerce04.herokuapp.com/api/order/create",
      { products, price, email, shippingData },
      config
    );

    // console.log("payment data", data);
    data && data?.message && toast.error(data.message);
    toast.dismiss(tid);
    const options = {
      key: process.env.REACT_APP_RAZOR_KEY,
      currency: data.data.currency,
      amount: data.data.amount.toString(),
      order_id: data.data.id,
      name: "I need money",
      description: "Thank you for nothing. Please give us some money",
      image: "LOGO",
      handler: function (response) {
        toast.dismiss(tid);
        toast.success("Payment was Successfull");
        // toast(response.razorpay_payment_id);
        // toast(response.razorpay_order_id);
        // toast(response.razorpay_signature);
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  }

  const incrementCount = (id, qty) => {
    if (qty + 1 > 3) {
      toast.error("Max quantity can be 3 only");
      return;
    }
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
  return (
    <>
      <Toaster />
      <div className="checkout-page-wrapper">
        <div className="shipping-info-wrapper">
          <form>
            <div className="checkout-email-wrapper">
              <div className="checkout-input-feilds-container">
                <h3>Email</h3>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <br />
                <br />
                <h3>Shipping Address</h3>
                <input
                  id="street"
                  type="text"
                  placeholder="Street Address"
                  required
                  value={shippingData.street}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  id="apartment"
                  type="text"
                  placeholder="Apartment"
                  value={shippingData.apartment}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  id="city"
                  type="text"
                  placeholder="City"
                  required
                  value={shippingData.city}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  id="state"
                  type="text"
                  placeholder="State"
                  required
                  value={shippingData.state}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  id="postal_code"
                  type="text"
                  placeholder="Postal Code"
                  required
                  value={shippingData.postal_code}
                  onChange={(e) => handleChange(e)}
                />
                <input
                  id="phone_number"
                  type="text"
                  placeholder="Phone number"
                  required
                  value={shippingData.phone_number}
                  maxLength={12}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={(e) => handleSubmit(e)}
              className="make-payment-btn"
            >
              Make Payment
            </button>
          </form>
        </div>
        <div className="cart-wrapper">
          <div>
            {cart.length > 0 ? (
              <>
                <div className="sd-body">
                  <ul>
                    {cart &&
                      cart.map((e) => (
                        <li key={e._id}>
                          <div className="sd-link">
                            <div className="order_tile">
                              <img src={e.cover_image} alt="" />
                              <div className="sidebar-product_desc">
                                <h5>
                                  {e.product_name} ({e.selectedSize})
                                </h5>
                                <h6>Rs.{e.price}</h6>
                              </div>
                            </div>
                            <div className="sidebar_count_btns">
                              <button
                                disabled={e.qty === 1}
                                onClick={() => decrementCount(e._id, e.qty)}
                              >
                                -
                              </button>
                              {e.qty}
                              <button
                                onClick={() => incrementCount(e._id, e.qty)}
                              >
                                +
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
                <div className="total-cost-delivery ">
                  <ul>
                    <li>
                      <span>Order Value : </span>
                      <span>{price}</span>
                    </li>
                    <li>
                      <span>Tax :</span>
                      <span>00</span>
                    </li>

                    <li>
                      <span>Delivery Charges : </span>
                      <span>49</span>
                    </li>

                    <div className="line-break"></div>
                    <li>
                      <span>Total ({cartQuantity} items): </span>
                      <span>{price + 49}</span>
                    </li>
                  </ul>
                </div>
              </>
            ) : (
              <p>
                {" "}
                No items in cart <br /> <Link to={"/products"}>
                  Shop more{" "}
                </Link>{" "}
              </p>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CheckoutPage;
