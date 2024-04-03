import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./components/ContactApp";
import "./styles/styles.css";

const element = (
  <div className="container">
    <ContactApp />
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(element);
