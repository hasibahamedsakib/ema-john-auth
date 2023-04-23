import { faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import "../Cart/cart.css";
import ReviewItem from "../RevewItem/RevewItem";

const Order = () => {
  const product = useLoaderData();
  const [cart, setCart] = useState(product);

  const handleRemoveItem = (id) => {
    const remaining = cart.filter((pd) => pd.id !== id);

    setCart(remaining);
    removeFromDb(id);
  };
  const handleClearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };
  return (
    <div className="orderPage">
      <div className="product-dec">
        {cart.map((pd) => (
          <ReviewItem key={pd.id} product={pd} deleteItem={handleRemoveItem} />
        ))}
      </div>
      <div className="product-Calculation">
        <Cart cart={cart} clearCart={handleClearCart}>
          <Link style={{ textDecoration: "none" }} to="/order/checkout">
            <button
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "40px",
                width: "100%",
                fontSize: "22px",
                backgroundColor: "#ff9900",
                padding: "10px",
                border: "none",
                borderRadius: "5px",
                color: "white",
                marginTop: "15px",
                cursor: "pointer",
              }}
            >
              Proceed Checkout
              <FontAwesomeIcon
                onClick={() => deleteItem(product.id)}
                icon={faCreditCard}
              />{" "}
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
