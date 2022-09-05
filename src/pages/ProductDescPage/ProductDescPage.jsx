import axios from "axios";
import React, { useEffect, useState } from "react";
import CardSkeleton from "../../components/Card Skeleton/CardSkeleton";
import "./ProductDescPage.scss";
const ProductDescPage = () => {
  const [productData, setProductData] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const fetchProduct = () => {
    let productID = window?.location?.pathname.split("/")[2];
    axios
      .get(`https://ecommerce04.herokuapp.com/api/product/${productID}`, {
        mode: "cors",
      })
      .then((res) => setProductData(res.data));
  };

  console.log(productData);

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleSizeClick = (e) => {
    setSelectedSize(e.target.id);
  };
  return (
    <>
      {productData ? (
        <div className="product_desc_page_wrapper">
          <div className="product_desc_image_grid">
            {productData?.images.length > 0 &&
              productData.images.map((each, idx) => (
                <div
                  key={idx}
                  className="product_wrapper_desc_page product_mobile_wrapper"
                >
                  <div className="product_image_container">
                    <img
                      className="product_image "
                      src={each}
                      alt="productImage"
                    />
                  </div>
                </div>
              ))}
          </div>

          <div className="product_desc_container">
            <div className="product_des_name_price">
              <h1>{productData?.product_name}</h1>
              <h2>₹{productData?.price}</h2>
            </div>

            <div className="product_description">{productData?.desc}</div>

            <div className="product_desc_size_container">
              Size
              <div className="size_select" tabIndex="1">
                {productData?.size_options &&
                  productData?.size_options.map((each) => (
                    <button
                      id={each}
                      className={selectedSize === each && " selected_size "}
                      onClick={(e) => handleSizeClick(e)}
                      key={each}
                    >
                      {each}
                    </button>
                  ))}
              </div>
            </div>

            <button className="add_to_cart custom-btn">Add to bag</button>
          </div>
        </div>
      ) : (
        "LOADING YOUR PRODUCT"
      )}
    </>
  );
};

export default ProductDescPage;
