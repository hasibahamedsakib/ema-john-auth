import React from "react";
import { useLocation } from "react-router-dom";

const Inventory = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>Inventory page</h1>
    </div>
  );
};

export default Inventory;
