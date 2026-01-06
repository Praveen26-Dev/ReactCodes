import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { SellerProductProvider } from "./context/SellerProductContext";
ReactDOM.createRoot(document.getElementById("root")).render(
    <SellerProductProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SellerProductProvider>
);
