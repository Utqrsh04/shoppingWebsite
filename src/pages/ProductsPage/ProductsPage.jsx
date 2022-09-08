import React, { useEffect } from "react";
import ProductCard from "../../components/ProductCard.jsx/ProductCard";
import "./ProductsPage.scss";
import axios from "axios";
import CircleLoader from "../../components/Circle Loader/CircleLoader";
import Footer from "../../components/Footer/Footer";
import { CartState } from "../../context/context";

const ProductPage = () => {
  const {
    state: { products },
    dispatch,
  } = CartState();
  const fetchProducts = () => {
    axios
      .get("https://ecommerce04.herokuapp.com/api/product", { mode: "cors" })
      .then((res) =>
        dispatch({
          type: "FETCHED_PRODUCTS",
          payload: res.data,
        })
      );
  };

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div className="products-search-container">
        <input type="text" placeholder="Search For Products" value="" />
        <button className="search-product-btn">Search</button>
      </div>
      <div className="products_wrapper_container">
        {products ? (
          products.map((e) => (
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
