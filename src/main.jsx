import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./AuthProvider/AuthProvider";
import Checkout from "./components/Checkout/Checkout";
import Home from "./components/Home/Home";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Login/Login";
import OrderReview from "./components/Order-Review/OrderReview";
import Order from "./components/Order/Order";
import Register from "./components/Register/Register";
import Shop from "./components/Shop/Shop";
import "./index.css";
import productsLoader from "./loader/pdLoader";
import PrivateRoute from "./Privetroute/Privetroute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/",
        element: <Shop />,
      },
      {
        path: "order",
        element: <Order />,
        loader: productsLoader,
      },
      {
        path: "order-review",
        element: <OrderReview />,
      },
      {
        path: "order/checkout",
        element: (
          <PrivateRoute>
            <Checkout />
          </PrivateRoute>
        ),
      },
      {
        path: "inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <RouterProvider router={router} />
  </AuthProvider>
);
