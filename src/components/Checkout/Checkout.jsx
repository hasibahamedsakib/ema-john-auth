import React from "react";
import { useLocation } from "react-router-dom";

const Checkout = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>checkout route</h1>
    </div>
  );
};

export default Checkout;
