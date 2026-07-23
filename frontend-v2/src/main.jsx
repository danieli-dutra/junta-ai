import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import AppProviders from "./app/providers";

import "./styles/global.css";

import { initializeTheme } from "./utils/theme";

initializeTheme();

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root element not found.");
}

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <AppProviders>
      <App />
    </AppProviders>
  </BrowserRouter>
);