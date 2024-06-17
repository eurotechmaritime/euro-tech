import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import store from "./redux/store";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";

let persistor = persistStore(store);
const root = ReactDOM.createRoot(document.getElementById("root"));

axios.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    if (403 === err.response.status) {
      console.log("Got 403 response.");
      localStorage.clear();
      console.log("Local storage cleared");
      window.location.assign("/login");
    } else {
      return Promise.reject(err);
    }
  }
);

root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <HelmetProvider>
          <App />
          <ToastContainer />
        </HelmetProvider>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
