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
import RazorPay from "./components/RazorPay/RazorPay";
import Profile from "./pages/ProfilePage/Profile";
import axios from "axios";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";

export const AppContext = React.createContext();
export const ProductContext = React.createContext();

function App() {
  const [loading, setLoading] = useState(false);

  const [data, setData] = useState([]);
  const fetchProducts = () => {
    axios
      .get("https://ecommerce04.herokuapp.com/api/product/newArrival", {
        mode: "cors",
      })
      .then((res) => setData(res.data));
  };

  useEffect(() => {
    fetchProducts();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const objData = {
    user: "NA",
    newArrivals: data,
  };

  return (
    <>
      <AppContext.Provider value={objData}>
        <BrowserRouter>
          {loading ? (
            <Loader />
          ) : (
            <>
              <Header />
              <Routes>
                <Route path="/test" element={<RazorPay />}></Route>
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
      </AppContext.Provider>
    </>
  );
}

export default App;
