import axios from "axios";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  function loginUser() {
    const t = toast.loading("Logging you in...");
    axios
      .post("https://ecommerce04.herokuapp.com/api/users/login", {
        email,
        password,
      })
      .then((res) => {
        return (
          setUser(res.data),
          toast.dismiss(t.id),
          localStorage.setItem("loginUser", JSON.stringify(res.data))
        );
      })
      .catch((res) => {
        return (
          toast.dismiss(t.id),
          toast.error(res.response?.data?.message),
          setUser(undefined)
        );
      });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email + "  " + password);
    loginUser();
  };

  useEffect(() => {
    toast.remove();
    setUser(JSON.parse(localStorage.getItem("loginUser")));
  }, []);

  if (user) {
    console.log("we have logged in user ");
    window.location.href = "/";
  }

  return (
    <div>
      <Toaster />
      <div className="login_container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <form onSubmit={submitHandler}>
            <h2>Please Sign In to Continue</h2>
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              // type="password"
              placeholder="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit" className="login_btn custom-btn">
              Login
            </button>

            <Link className="auth_links" to="/signup">
              <p>
                New here ? <strong>Signup now</strong>
              </p>
            </Link>
            <h2>&nbsp;</h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
