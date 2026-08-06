import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Spiderman from "./Spiderman";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Spiderman />
  </StrictMode>
);