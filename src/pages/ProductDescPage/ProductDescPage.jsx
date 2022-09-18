import axios from "axios";
import React, { useEffect, useState } from "react";
import CircleLoader from "../../components/Circle Loader/CircleLoader";
import { CartState } from "../../context/context";
import "./ProductDescPage.scss";
const ProductDescPage = () => {
  const [productData, setProductData] = useState();
  const [selectedSize, setSelectedSize] = useState();

  const {
    state: { cart },
    dispatch,
  } = CartState();

  const fetchProduct = () => {
    let productID = window?.location?.pathname.split("/")[2];
    console.log("calling fetch each ", productID);
    axios
      .get(`https://ecommerce04.herokuapp.com/api/product/${productID}`)
      .then((res) => setProductData(res.data));
  };

  // console.log(productData);

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleSizeClick = (e, id) => {
    setSelectedSize(e.target.id);
    dispatch({
      type: "CHANGE_SIZE",
      payload: {
        _id: id,
        selectedSize: e.target.id,
      },
    });
  };

  return (
    <>
      <div className="product_desc_page_wrapper">
        {productData ? (
          <>
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
                        className={
                          selectedSize === each ? " selected_size " : " "
                        }
                        onClick={(e) => handleSizeClick(e, productData._id)}
                        key={each}
                      >
                        {each}
                      </button>
                    ))}
                </div>
              </div>
              {cart.some((p) => p._id === productData._id) ? (
                <button
                  className="add_to_cart custom-btn"
                  onClick={() =>
                    dispatch({
                      type: "REMOVE_FROM_CART",
                      payload: productData,
                    })
                  }
                >
                  Remove From Bag
                </button>
              ) : (
                <button
                  className="add_to_cart custom-btn"
                  onClick={() => {
                    return (
                      dispatch({
                        type: "ADD_TO_CART",
                        payload: productData,
                      }),
                      dispatch({
                        type: "CHANGE_SIZE",
                        payload: {
                          _id: productData._id,
                          selectedSize: selectedSize,
                        },
                      })
                    );
                  }}
                >
                  Add to bag
                </button>
              )}
            </div>
          </>
        ) : (
          <CircleLoader />
        )}
      </div>
    </>
  );
};

export default ProductDescPage;
