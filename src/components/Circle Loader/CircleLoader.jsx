import React from "react";
import "./CircleLoader.scss";

const CircleLoader = () => {
  return (
    <div className="product_desc_loader">
      <span className="loader-done"></span>
      <span className="circle c1"></span>
      <span className="circle c2"></span>
      <span className="circle c3"></span>
    </div>
  );
};

export default CircleLoader;
