import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import "./login.css";

const Login = () => {
  const [error, setError] = useState("");
  const { userLogIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    setError("");
    userLogIn(email, password)
      .then((result) => {
        const loginUser = result.user;
        console.log(loginUser);
      })
      .catch((err) => setError(err.message));
  };
  return (
    <div className="login-container">
      <h3
        style={{
          textAlign: "center",
          fontSize: "35px",
          marginBottom: "25px",
        }}
      >
        Login
      </h3>
      <form onSubmit={handleLogIn}>
        <div className="input-layer">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" />
        </div>
        <div className="input-layer">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" />
        </div>
        <p className="error-msg">{error.slice(9, 100)}</p>
        <button className="login-btn">Login</button>
        <small style={{ textAlign: "center" }}>
          New to Ema-john?{" "}
          <Link to="/register" style={{ color: "orange", marginTop: "15px" }}>
            Create New Account
          </Link>
        </small>
        <hr />

        <button className="continue-google">Continue with Google</button>
      </form>
    </div>
  );
};

export default Login;
