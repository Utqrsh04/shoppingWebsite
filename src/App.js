import { useEffect, useState } from "react";
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

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      <BrowserRouter>
        {loading ? (
          <Loader />
        ) : (
          <>
            <Header />
            <Routes>
              <Route path="/signup" element={<SignupForm />}></Route>
              <Route path="/login" element={<LoginForm />}></Route>
              <Route path="/" element={<LandingPage />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/products" element={<ProductsPage />}></Route>

              <Route
                path="product/:productId"
                element={<ProductDescPage />}
              ></Route>
            </Routes>
          </>
        )}
      </BrowserRouter>
    </>
  );
}

export default App;
