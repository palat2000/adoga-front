import React from "react";
import ReactDOM from "react-dom/client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./context/AuthContextProvider.jsx";
import SearchContextProvider from "./context/SearchContextProvider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <LocalizationProvider dateAdapter={AdapterDayjs}>
    <SearchContextProvider>
      <AuthContextProvider>
        <App />
      </AuthContextProvider>
    </SearchContextProvider>
  </LocalizationProvider>
  // </React.StrictMode>,
);
