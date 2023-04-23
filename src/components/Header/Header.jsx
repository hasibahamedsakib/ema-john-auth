import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../images/Logo.svg";
import "./Header.css";
const Header = () => {
  const { users, userLogOut } = useContext(AuthContext);
  // console.log(users);
  return (
    <div className="header">
      <nav className="nav-bar">
        <Link to="/">
          {" "}
          <img src={logo} alt="image" />
        </Link>

        <div className="nav-link">
          <Link to="/order">Order</Link>
          <Link to="/order-review">Orders Review</Link>
          <Link to="/inventory">Manage Inventory</Link>

          {users && users ? (
            <>
              <p>{users.email}</p>
              <button className="logout-btn" onClick={() => userLogOut()}>
                SignOut
              </button>
            </>
          ) : (
            <Link to="/login">LogIn</Link>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Header;
