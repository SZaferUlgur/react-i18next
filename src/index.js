import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import i18next from "./i18next";
import { I18nextProvider } from "react-i18next";
import { RouterProvider } from "react-router-dom";
import {ToastContainer} from "react-toastify"
import { appRouter } from "./Routes";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18next}>
    <React.StrictMode>
      <RouterProvider router={appRouter} />
      <ToastContainer 
      position="top-center"
      autoClose={2000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
    </React.StrictMode>
  </I18nextProvider>
);

reportWebVitals();