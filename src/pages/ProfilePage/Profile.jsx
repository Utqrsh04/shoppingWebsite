import axios from "axios";
import React, { useContext, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../../components/Footer/Footer";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./Profile.scss";

const Profile = () => {
  const user = useContext(UserContext);
  console.log(user);

  const [name, setName] = useState(user?.name);
  const [email, setEmail] = useState(user?.email);
  const [password, setPassword] = useState();

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
        "https://ecommerce04.herokuapp.com/api/users/profile",
        {
          name,
          email,
          password,
        },
        config
      )
      .then((res) => {
        return localStorage.setItem("loginUser", JSON.stringify(res.data));
      })
      .catch((res) => {
        return toast.error(res.response?.data?.message);
      });
  }

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
            <form>
              <div className="profile-contact-wrapper">
                <h1> Shipping Address </h1>
                <div className="profile-input-feilds-container">
                  <input
                    type="text"
                    placeholder="Street Address"
                    required
                    value=""
                  />
                  <input type="text" placeholder="Apartment" value="" />
                  <input type="text" placeholder="City" required value="" />
                  <input type="text" placeholder="State" required value="" />
                  <input
                    type="text"
                    placeholder="Postal Code"
                    required
                    value=""
                  />
                  <input
                    type="text"
                    placeholder="Phone number"
                    required
                    value=""
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

              <div>Orders will go here</div>
              <OrderCard />
            </div>
          </div>
        </div>
      ) : (
        <div className="profile-page-login-link">
          <Link className="login-link" to={"/login"}>
            {" "}
            Login to Continue{" "}
          </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Profile;
