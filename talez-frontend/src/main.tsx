import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import "./index.css";
import { Toaster } from "./shared/ui/ui/toaster.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <App />
      </Suspense>
      <Toaster />
    </BrowserRouter>
  </React.StrictMode>
);
