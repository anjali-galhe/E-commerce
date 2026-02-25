import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import './index.css'
import App from "./App";
import ShopContextProvider from "./context/ShopContext";

ReactDOM.createRoot(document.getElementById("root")).render(
<ShopContextProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
      </ShopContextProvider>
);
