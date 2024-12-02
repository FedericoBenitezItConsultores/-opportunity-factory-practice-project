import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/Router.jsx";
import  Modal from "./components/molecules/Modal/ModalBase.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppRouter />
    <Modal/> 
  </StrictMode>
);
