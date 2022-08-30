import React from "react";
import { Link } from "react-router-dom";
import "./SignupForm.scss";

const SignupForm = () => {
  return (
    <div>
      <div className="signup_container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <form>
            <h2>Please Register to Continue</h2>
            <input type="email" placeholder="email" required />
            <input type="password" placeholder="password" required />
            <input type="password" placeholder="Confirm password" required />
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
