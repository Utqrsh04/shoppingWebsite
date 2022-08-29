import React from "react";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <span class="dot"></span>
      <div class="dots">
        <span className="loader_dots"></span>
        <span className="loader_dots"></span>
        <span className="loader_dots"></span>
      </div>
    </div>
  );
};

export default Loader;
