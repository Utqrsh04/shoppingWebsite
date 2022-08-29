import React from "react";
import ProductCard from "../ProductCard.jsx/ProductCard";
import "./NewArrivals.scss";

const imageSrc = [
  "https://media.everlane.com/image/upload/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/efc7f6e8_b08d",
  "https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/305d6c38_ba4e",
  "https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/fa306354_a4ba",
  "https://media.everlane.com/image/upload/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/633d0ccf_7bf0",
  "https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/85bfb37e_88af",
  "https://media.everlane.com/image/upload/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/89e04b75_14de",
];

const NewArrivals = () => {
  return (
    <div className="below_hero_section">
      <h2 className="below_hero_section_heading"> New Arrivals </h2>

      <div className="product_card_wrapper_container">
        {imageSrc.map((e) => (
          <ProductCard img={e} />
        ))}
      </div>
    </div>
  );
};

export default NewArrivals;
