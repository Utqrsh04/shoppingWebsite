import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard.jsx/ProductCard";
import "./ProductsPage.scss";
import axios from "axios";
import CircleLoader from "../../components/Circle Loader/CircleLoader";
import Footer from "../../components/Footer/Footer";

const ProductPage = () => {
  const [data, setData] = useState();
  const fetchProducts = () => {
    axios
      .get("https://ecommerce04.herokuapp.com/api/product", { mode: "cors" })
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  console.log(data);

  return (
    <div>
      <div className="products-search-container">
        <input type="text" placeholder="Search For Products" value="" />
        <button className="search-product-btn">Search</button>
      </div>
      <div className="products_wrapper_container">
        {data ? (
          data.map((e) => (
            <ProductCard
              key={e._id}
              product_name={e.product_name}
              img={e.cover_image}
              price={e.price}
              product_id={e.product_id}
            />
          ))
        ) : (
          <CircleLoader />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default ProductPage;
