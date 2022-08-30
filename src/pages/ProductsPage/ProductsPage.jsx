import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard.jsx/ProductCard";
import "./ProductsPage.scss";
import axios from "axios";

// const imageSrc = [
//   "https://media.everlane.com/image/upload/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/efc7f6e8_b08d",
//   "https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/305d6c38_ba4e",
//   "https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/fa306354_a4ba",
//   "https://media.everlane.com/image/upload/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/633d0ccf_7bf0",
//   "https://media.everlane.com/image/upload/c_fill,w_1080,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/85bfb37e_88af",
//   "https://media.everlane.com/image/upload/c_fill,w_384,ar_4:5,q_auto,dpr_1.0,g_face:center,f_auto,fl_progressive:steep/i/89e04b75_14de",
// ];

const ProductPage = () => {
  const [data, setData] = useState([]);
  const fetchProducts = () => {
    axios
      .get("https://ecommerce04.herokuapp.com/api/product", { mode: "cors" })
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div>
      ProductPage
      <div className="products_wrapper_container">
        {data &&
          data.map((e) => (
            <ProductCard
              key={e._id}
              product_name={e.product_name}
              img={e.cover_image}
              price={e.price}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductPage;
