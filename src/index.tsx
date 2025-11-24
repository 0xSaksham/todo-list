import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { AppProvider } from "./contexts/AppContext";

// @ts-ignore: allow side-effect CSS import without type declarations
import "./styles/app.css";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <AppProvider>
    <App />
  </AppProvider>
);
