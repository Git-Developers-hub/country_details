import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ContextAPI } from "./ContextAPI";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextAPI>
      <App />
    </ContextAPI>
  </StrictMode>
);
