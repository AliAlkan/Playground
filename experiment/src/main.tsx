import React from "react";
import ReactDOM from "react-dom/client";

import "../../src/styles/index.css";
import ExperimentApp from "./ExperimentApp";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ExperimentApp />
  </React.StrictMode>,
);
