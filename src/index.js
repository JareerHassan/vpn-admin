import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./AppRouter";
import "./index.css"; // If you have global styles
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { ToastProvider } from "./ToastManager";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // Move the basename prop to the Router component here
    <ToastProvider>
      <AppRouter />
    </ToastProvider>


);
