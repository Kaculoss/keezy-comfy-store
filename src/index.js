import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { UserProvider } from "./context/userContext";
import { CartProvider } from "./context/cartContext";
import { ProductsProvider } from "./context/productsContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider>
    <UserProvider>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
