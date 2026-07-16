import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import { CRMProvider } from "./hooks/useCRMStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  <CRMProvider>
    <App />
  </CRMProvider>
);