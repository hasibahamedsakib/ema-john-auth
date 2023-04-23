import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import Loader1 from "../components/Loader/Loader1";

const PrivateRoute = ({ children }) => {
  const { users, loading } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <Loader1 />;
  }
  if (users) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  //   return <div>{users ? <Inventory /> : <Login />}</div>;
};

export default PrivateRoute;
