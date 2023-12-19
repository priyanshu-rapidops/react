import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { CartItems } from "./Components/CartItems/CartItems";
import { Cart } from "./Components/Cart/Cart";
import App from "./App";
import { Provider } from "react-redux";
import appStore from "./Redux/store/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Cart />,
      },
      {
        path: "/cartItems",
        element: <CartItems />,
      },
    ],
  },
]);
root.render(
  <Provider store={appStore}>
    <RouterProvider router={router} />
  </Provider>
);

reportWebVitals();
