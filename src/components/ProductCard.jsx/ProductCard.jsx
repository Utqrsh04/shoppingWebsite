import React from "react";
import "./ProductCard.scss";

const ProductCard = ({ img }) => {
  return (
    <div className="product_wrapper">
      <div className="product_image_container">
        <img className="product_image" src={img} alt="productImage" />
      </div>

      <div className="product_details_wrapper">
        <p>The Cross-Back Apron Mini Dress</p>
        <p>₹ 7220</p>
      </div>
    </div>
  );
};

export default ProductCard;
