import React from "react";
import "../pages/Register.css";

const Login = () => {
  return (
    <div className="cover">
      <h1>Register</h1>
      <input type="text" placeholder="Firstname" />
      <input type="text" placeholder="Lastname" />
      <input type="text" placeholder="Gmail id" />
      <input type="text" placeholder="Contact number" />
      <input type="password" placeholder="password" />

      <div className="login-btn">Register</div>
      <p className="text">Or register using</p>

      <div className="alt-login">
        <div className="facebook"></div>
        <div className="google"></div>
      </div>
    </div>
  );
};
export default Login;
