import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../App";
import Footer from "../../components/Footer/Footer";
import OrderCard from "../../components/OrderCard/OrderCard";
import "./Profile.scss";

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <>
      {user ? (
        <div className="profile-page-wrapper">
          <div className="profile-container">
            <form>
              <div className="profile-contact-wrapper">
                <h1> Contact Information </h1>
                <div className="profile-input-feilds-container">
                  <input type="text" placeholder="Name" required value="" />
                  <input type="email" placeholder="Email" required value="" />
                  <input
                    type="password"
                    placeholder="Password"
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
          <Link className="login-link" to={"/login"}> Login to Continue </Link>
        </div>
      )}
      <Footer />
    </>
  );
};

export default Profile;
