import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "App";
import Home from "Pages/Home/Home";
import Settings from "Pages/Settings/Settings";
import Invoice from "Pages/Invoices/Invoices";
import Error404 from "Pages/Errors/404";

import "Styles/index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLDivElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="settings" element={<Settings />} />
          <Route path="invoices/*" element={<Invoice />} />
          <Route path="*" element={<Error404 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
