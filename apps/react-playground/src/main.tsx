import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NaverMapProvider } from "react-naver-maps/src";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NaverMapProvider
      options={{
        clientId: "c4ovrqy4fg",
      }}
    >
      <App />
    </NaverMapProvider>
  </React.StrictMode>
);
