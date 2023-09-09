import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./Components/App/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppContextProvider } from "./context/AuthProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AppContextProvider>
      <Routes>
        <Route path="/*" element={<App />} />
      </Routes>
    </AppContextProvider>
  </BrowserRouter>
);
