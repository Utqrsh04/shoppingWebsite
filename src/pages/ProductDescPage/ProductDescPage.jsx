import React from "react";
import "./ProductDescPage.scss";
const ProductDescPage = () => {
  let productID = window.location.pathname.split("/")[2];

  console.log(window.location.pathname.split("/")[2]);

  return <div>ProductDescPage with {productID}</div>;
};

export default ProductDescPage;
