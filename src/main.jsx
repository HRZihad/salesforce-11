import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SnackbarProvider } from "notistack";
import SocketData from "components/InitialLoad/SocketData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider maxSnack={1}>
      <SocketData />
      <App />
    </SnackbarProvider>
  </React.StrictMode>
);
