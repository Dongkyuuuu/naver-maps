import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { NaverMapProvider } from "@dongkyuuuu/react-naver-maps/src";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <NaverMapProvider
      options={{
        clientId: import.meta.env.VITE_MAP_KEY,
      }}
    >
      <App />
    </NaverMapProvider>
  </React.StrictMode>
);
