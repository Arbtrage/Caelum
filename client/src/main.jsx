import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="max-w-7xl border  mx-auto my-5 py-5 select-none ">
      <App />
    </div>
  </React.StrictMode>
);
