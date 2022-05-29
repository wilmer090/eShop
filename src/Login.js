import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import StorefrontIcon from "@mui/icons-material/Storefront";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="login">
      <Link to="/" style={{ textDecoration: "none" }}>
        <div className="login_logo">
          <StorefrontIcon className="login_logoImage" fontSize="large" />
          <h2 className="login_logoTitle">eShop</h2>
        </div>
      </Link>
      <div className="login_container">
        <h1>Sign-in</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link to={"/home"} style={{ textDecoration: "none" }}>
            <button type="submit" className="login_signInButton">
              Sign In
            </button>
          </Link>
        </form>
        <p>
          I agree to the terms and conditions as set out by the user agreement.
        </p>
        <button className="login_registerButton">
          Create your eShop Account
        </button>
      </div>
    </div>
  );
};

export default Login;
