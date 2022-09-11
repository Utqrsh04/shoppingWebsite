import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard.jsx/ProductCard";
import "./ProductsPage.scss";
import axios from "axios";
import CircleLoader from "../../components/Circle Loader/CircleLoader";
import Footer from "../../components/Footer/Footer";
import { CartState } from "../../context/context";

const ProductPage = () => {
  const [search, setSearch] = useState("");

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

  const filteredData =
    products &&
    products.length > 0 &&
    products.filter((product) =>
      product?.product_name?.toLowerCase().includes(search?.toLowerCase())
    );

  console.log(products, filteredData);

  return (
    <div>
      <div className="products-search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search For Products"
        />
        <button className="search-product-btn">Search</button>
      </div>
      {filteredData && filteredData.length === 0 && <h3>No Product Found</h3>}
      <div className="products_wrapper_container">
        {filteredData ? (
          filteredData.map((e) => (
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
