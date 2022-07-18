import "../styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeManager } from "../lib";
import { BrowserRouter } from "react-router-dom";

export const themeManager = new ThemeManager(true);

const container = document.getElementById("root")!;
const root = createRoot(container);
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
