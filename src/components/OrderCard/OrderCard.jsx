import React from "react";
import "./OrderCard.scss";

const OrderCard = ({ order, idx }) => {
  console.log(order);
  return (
    <div>
      <div className="each-product-wrapper">
        <div className="product-image">
          <img src="" alt="" />
        </div>

        <div className="product-details">
          {idx + 1}
          <h4>{order.user.name}</h4>
          <h4> {order.email}</h4>
          {order.order_id} Price
        </div>

        {order.products.map((e) => (
          <div className="product-shipping">
            <br />
            
            <br />
            salkfjalksf
          </div>
        ))}

        <div className="payment-summary">
          Subtotal <br /> tax
          <br /> delivery <br />
          total
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
