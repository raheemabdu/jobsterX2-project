import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom"; // ✅ Needed for useNavigate
import App from "./App";
import "./index.css"; // keep if you already have it

// ✅ Correct ReactDOM syntax for Vite
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);