import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import "./SignupForm.scss";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [user, setUser] = useState();

  const [error, setError] = useState();

  function signupUser() {
    axios
      .post("https://ecommerce04.herokuapp.com/api/users/signup", {
        email,
        password,
      })
      .then((res) => {
        return (
          setUser(res.data),
          setError(undefined),
          localStorage.setItem("loginUser", JSON.stringify(res.data))
        );
      })
      .catch((res) => {
        return (
          setError(res.response?.data?.message),
          toast.error(res.response?.data?.message)
        );
      });

    localStorage.setItem("loginUser", JSON.stringify(user));
  }

  console.log(user);
  console.log(error);

  const submitHandler = (e) => {
    e.preventDefault();
    if (confirmPassword !== password) {
      console.log("Passwords do not match");
      toast.error("Passwords do not match");
      setError("Passwords do not match");
      return;
    }
    console.log(email + "  " + password);
    signupUser();
  };
  return (
    <div>
      <Toaster />
      <div className="signup_container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <form onSubmit={submitHandler}>
            <h2>Please Register to Continue</h2>
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
            <input
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <button type="submit" className="signup_btn custom-btn ">
              Register
            </button>
            <Link className="auth_links" to="/login">
              <p>
                Already a customer. <strong>Login here</strong>
              </p>
            </Link>
            <h2>&nbsp;</h2>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
