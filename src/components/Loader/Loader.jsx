import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <span className="dot"></span>
      <div className="dots">
        <span className="loader_dots"></span>
        <span className="loader_dots"></span>
        <span className="loader_dots"></span>
      </div>
    </div>
  );
};

export default Loader;
