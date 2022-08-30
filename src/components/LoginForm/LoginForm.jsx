import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div>
      <div className="login_container">
        <div className="top"></div>
        <div className="bottom"></div>
        <div className="center">
          <form>
            <h2>Please Sign In to Continue</h2>
            <input type="email" placeholder="email" required />
            <input type="password" placeholder="password" required />
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
