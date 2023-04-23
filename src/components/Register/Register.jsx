import { updateProfile } from "firebase/auth";
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
  const { userSignUp } = useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const username = e.target.username.value;
    const password = e.target.password.value;
    const confirmPassword = e.target.confirmPassword.value;

    setError("");
    if (password != confirmPassword) {
      setError("Password doesn't match");
      return;
    } else if (password.length < 6) {
      setError("Password Must be six characters or longer");
      return;
    }
    console.log(email, password, confirmPassword);

    userSignUp(email, password)
      .then((result) => {
        const createUser = result.user;
        console.log(createUser);
        updateProfile(createUser, {
          displayName: username,
        }).then(() => console.log("name added"));
        alert("user created.Please Login");
        navigate("/login");
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
        Sign Up
      </h3>
      <form onSubmit={handleSubmit}>
        <div className="input-layer">
          <label htmlFor="">User Name</label>
          <input type="text" name="username" id="" required />
        </div>
        <div className="input-layer">
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" required />
        </div>
        <div className="input-layer">
          <label htmlFor="">Password</label>
          <input type="password" name="password" id="" required />
        </div>
        <div className="input-layer">
          <label htmlFor="">Confirm Password</label>
          <input type="password" name="confirmPassword" id="" required />
        </div>
        <p className="error-msg">{error.slice(9, 100)}</p>
        <button className="login-btn">Sign Up</button>
        <small style={{ textAlign: "center" }}>
          Already have an account?{" "}
          <Link to="/login" style={{ color: "orange", marginTop: "15px" }}>
            Login
          </Link>
        </small>
        <hr />
        <button className="continue-google">Continue with Google</button>
      </form>
    </div>
  );
};

export default Register;
