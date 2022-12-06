import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

import "./SignupForm.scss";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function signupUser() {
    const t = toast.loading("Registering...");
    axios
      .post("https://shoppingwebsitebackend.onrender.com/api/users/signup", {
        name,
        email,
        password,
      })
      .then((res) => {
        return (
          toast.dismiss(t.id),
          toast.success(
            "Registration Successfull , Please Verify your email to continue",
            {
              duration: 4000,
              position: "top-center",
            }
          )
        );
      })
      .catch((res) => {
        return toast.dismiss(t.id), toast.error(res.response?.data?.message);
      });
  }

  const submitHandler = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      toast.error("Please provide required feilds ");
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
              type="text"
              placeholder="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
