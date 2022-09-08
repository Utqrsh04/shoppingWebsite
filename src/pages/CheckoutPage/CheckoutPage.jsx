import React from "react";
import "./CheckoutPage.scss";

const CheckoutPage = () => {
  return (
    <>
      <div className="checkout-page-wrapper">
        <div className="shipping-info-wrapper">
          <form>
            <div className="checkout-email-wrapper">
              <div className="checkout-input-feilds-container">
                <h3>Email</h3>
                <input type="email" placeholder="Email" required value="" />
                <br />
                <br />
                <h3>Shipping Address</h3>
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

            <button type="submit" className="make-payment-btn">
              Make Payment
            </button>
          </form>
        </div>
        <div className="cart-wrapper">
          <div className="cart-product">
            <div className="info">
              <h3>Product Name lorem40</h3>
              <p>Price</p>
            </div>

            <div className="increment-decrement-btns">
              <button>+</button>
              <span>5</span>
              <button>-</button>
            </div>

            <div className="delete-from-bag">X</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutPage;
