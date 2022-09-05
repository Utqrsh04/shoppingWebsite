import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.scss";

const ProductCard = (props) => {
  let navigate = useNavigate();

  function onProductClick() {
    let d = window.location.pathname.split("/")[1];

    if (d === "products") {
      navigate(props.product_id);
    } else {
      navigate(`products/${props.product_id}`);
    }
  }

  return (
    <div className="product_wrapper" onClick={onProductClick}>
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
