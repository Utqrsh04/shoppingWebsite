import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Loader from "./components/Loader/Loader";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <div className="App">
      <div>
        <LandingPage />
      </div>
    </div>
  );
}

export default App;
