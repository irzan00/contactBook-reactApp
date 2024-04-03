import React from "react";
import { createRoot } from "react-dom/client";

const element = (
  <div className="header">
    <h1>Hello World!</h1>
  </div>
);

const root = createRoot(document.getElementById("root"));

root.render(element);
