import React from "react";
import "./ProductCard.scss";

const ProductCard = (props) => {
  return (
    <div className="product_wrapper">
      <div className="product_image_container">
        <img className="product_image" src={props.img} alt="productImage" />
      </div>

      <div className="product_details_wrapper">
        <p>{props.product_name}</p>
        <p>₹ {props.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
