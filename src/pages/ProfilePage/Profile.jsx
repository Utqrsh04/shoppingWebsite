import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../../components/Footer/Footer";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./Profile.scss";

const Profile = () => {
  const user = useContext(UserContext);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState();
  const [orderData, setOrderData] = useState([]);
  const [orderStatus, setOrderStatus] = useState("cancelled");

  const [shippingAddress, setShippingAddress] = useState({
    user: user ? user._id : "",
    street: "",
    apartment: "",
    city: "",
    state: "",
    postal_code: "",
    phone_number: "",
  });

  const handleChange = (e) => {
    const newData = { ...shippingAddress };
    newData[e.target.id] = e.target.value;
    setShippingAddress(newData);
  };

  function updateProfile(e) {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .post(
        "https://shoppingwebsitebackend.onrender.com/api/users/profile",
        {
          name,
          email,
          password,
        },
        config
      )
      .then((res) => {
        return (
          localStorage.setItem("loginUser", JSON.stringify(res.data)),
          toast.success("Profile Updated Successfully")
        );
      })
      .catch((res) => {
        return toast.error(res.response?.data?.message);
      });
  }

  function updateShippingAddress(e) {
    e.preventDefault();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .post(
        "https://shoppingwebsitebackend.onrender.com/api/shippingAddress/update",
        shippingAddress,
        config
      )
      .then((res) => {
        return (
          setShippingAddress(res.data),
          toast.success("Shipping Address saved successfully")
        );
      })
      .catch((res) => {
        return toast.error(res.response?.data?.message);
      });
  }

  const fetchShippingAddress = () => {
    if (user === undefined || user === null) return;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    axios
      .get(
        "https://shoppingwebsitebackend.onrender.com/api/shippingAddress/",
        config
      )
      .then((res) => {
        return (
          localStorage.setItem("shippingData", JSON.stringify(res.data)),
          setShippingAddress(res.data)
        );
      });
  };

  const fetchOrders = () => {
    if (user === undefined || user === null) return;

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    };
    // orderType :"pending" "cancelled" "processed" "delivered"
    axios
      .get(
        `https://shoppingwebsitebackend.onrender.com/api/order?status=${orderStatus}`,
        config
      )
      .then((res) => {
        return setOrderData(res.data);
      });
  };

  console.log("ORDER DATA", orderData);

  useEffect(() => {
    fetchShippingAddress();
    fetchOrders();
  }, []);

  return (
    <>
      <Toaster />
      {user ? (
        <div className="profile-page-wrapper">
          <div className="profile-container">
            <form onSubmit={updateProfile}>
              <div className="profile-contact-wrapper">
                <h1> Contact Information </h1>
                <div className="profile-input-feilds-container">
                  <input
                    type="text"
                    placeholder="Name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <input
                    type="text"
                    placeholder="Password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
              <button type="submit" className="save-profile-data custom-btn">
                Save Changes
              </button>
            </form>
            <div className="line"></div>
            <form onSubmit={updateShippingAddress}>
              <div className="profile-contact-wrapper">
                <h1> Shipping Address </h1>
                <div className="profile-input-feilds-container">
                  <input
                    type="text"
                    placeholder="Street Address"
                    required
                    id={"street"}
                    value={shippingAddress.street}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    placeholder="Apartment"
                    id="apartment"
                    value={shippingAddress.apartment}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    placeholder="City"
                    required
                    id="city"
                    value={shippingAddress.city}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    placeholder="State"
                    id="state"
                    required
                    value={shippingAddress.state}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    required
                    id="postal_code"
                    value={shippingAddress.postal_code}
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    required
                    id="phone_number"
                    maxLength={12}
                    value={shippingAddress.phone_number}
                    onChange={(e) => handleChange(e)}
                  />
                </div>
              </div>
              <button type="submit" className="save-profile-data custom-btn">
                Save Changes
              </button>
            </form>
            <div className="line"></div>

            <div className="user-orders-wrapper">
              <h1> Orders</h1>
              {orderData &&
                orderData.map((data, key) => (
                  <OrderCard order={data} idx={key} />
                ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="profile-page-login-link">
          <Link className="login-link" to={"/login"}>
            Login to Continue
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Profile;
