import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { CyclesProvider } from "./context/CyclesContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <CyclesProvider>
        <App />
      </CyclesProvider>
    </BrowserRouter>
  </StrictMode>
);
