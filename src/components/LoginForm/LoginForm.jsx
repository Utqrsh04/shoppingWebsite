import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [user, setUser] = useState();

  const [error, setError] = useState();

  function loginUser() {
    axios
      .post("https://ecommerce04.herokuapp.com/api/users/login", {
        email,
        password,
      })
      .then((res) => setUser(res.data), setError(undefined))
      .catch(
        (res) => setError(res.response?.data?.message),
        setUser(undefined)
      );

    localStorage.setItem("loginUser", user);
  }

  console.log(user);
  console.log(error);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(email + "  " + password);
    loginUser();
  };

  useEffect(() => {
    setUser(localStorage.getItem("loginUser"));
  }, []);

  if (user) {
    console.log("we have logged in user ");
    window.location.href = "/";
  }

  return (
    <div>
      <div className="login_container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <form onSubmit={submitHandler}>
            {error && <h3> {error} </h3>}
            <h2>Please Sign In to Continue</h2>
            <input
              type="email"
              placeholder="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
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
