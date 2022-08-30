import React from "react";
import { Link } from "react-router-dom";
import "./LoginForm.scss";

const LoginForm = () => {
  return (
    <div>
      <div class="login_container" onclick="onclick">
        <div class="top"></div>
        <div class="bottom"></div>
        <div class="center">
          <form>
            <h2>Please Sign In to Continue</h2>
            <input type="email" placeholder="email" required />
            <input type="password" placeholder="password" required />
            <button type="submit" class="login_btn custom-btn">
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
