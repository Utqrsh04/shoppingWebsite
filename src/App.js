import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import LandingPage from "./pages/LandingPage/LandingPage";
import Contact from "./pages/ContactPage/Contact";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductDescPage from "./pages/ProductDescPage/ProductDescPage";
import LoginForm from "./components/LoginForm/LoginForm";
import SignupForm from "./components/SignupForm/SignupForm";
import Profile from "./pages/ProfilePage/Profile";
import axios from "axios";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import { CartState } from "./context/context";
import NotFound from "./pages/NotFoundPage/NotFound";

export const UserContext = React.createContext();
export const ProductContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  // const [data, setData] = useState();

  const {
    state: { newArrivals },
    dispatch,
  } = CartState();

  const fetchNewProducts = () => {
    axios
      .get("http://localhost:5000/api/product", {
        mode: "cors",
      })
      .then((res) => {
        return (
          dispatch({
            type: "FETCHED_PRODUCTS",
            payload: res.data,
          }),
          setLoading(false)
        );
      });
  };

  useEffect(() => {
    setLoading(true);
    setUser(JSON.parse(localStorage.getItem("loginUser")));
    fetchNewProducts();
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <ProductContext.Provider value={newArrivals}>
        <UserContext.Provider value={user}>
          <BrowserRouter>
            {loading ? (
              <Loader />
            ) : (
              <>
                <Header />
                <Routes>
                  <Route path="*" element={<NotFound />} />
                  <Route path="/signup" element={<SignupForm />}></Route>
                  <Route path="/login" element={<LoginForm />}></Route>
                  <Route path="/" element={<LandingPage />}></Route>
                  <Route path="/contact" element={<Contact />}></Route>
                  <Route path="/products" element={<ProductsPage />}></Route>
                  <Route path="/profile" element={<Profile />}></Route>
                  <Route path="/checkout" element={<CheckoutPage />}></Route>

                  <Route
                    path="products/:productId"
                    element={<ProductDescPage />}
                  ></Route>
                </Routes>
              </>
            )}
          </BrowserRouter>
        </UserContext.Provider>
      </ProductContext.Provider>
    </>
  );
}

export default App;
