import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { StoreContext, StoreContextprovider } from "./context/storeContext.jsx";
createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <StoreContextprovider>
      <App />
    </StoreContextprovider>
  </BrowserRouter>
);
