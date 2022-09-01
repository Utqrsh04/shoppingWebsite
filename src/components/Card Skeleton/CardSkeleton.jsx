import React from "react";
import "./CardSkeleton.scss";

const CardSkeleton = (props) => {
  return (
    <div class="skeleton_container">
      {Array.apply(null, { length: props.number }).map((e, i) => (
        <div class="col-sm-6 col-md-3">
          <div class="movie--isloading">
            <div class="loading-image"></div>
            <div class="loading-content">
              <div class="loading-text-container">
                <div class="loading-main-text"></div>
                <div class="loading-sub-text"></div>
              </div>
              <div class="loading-btn"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardSkeleton;
