import React from "react";
import ReactDOM from "react-dom/client";
import { Workbox } from "workbox-window";
import App from "@/components/app/app";
import config from "@/config/config";

if ("serviceWorker" in navigator && config.env !== "development") {
  const wb = new Workbox("./service-worker.js", { scope: "/" });
  wb.addEventListener("activated", async (event) => {
    // Reload when a new update is available
    // @todo show notification
    if (event.isUpdate) {
      await wb.update();
      if (confirm("A new version is available, reload?")) {
        window.location.reload();
      }
    }
  });
  wb.register().then(() => {
    console.log("Service Worker registered");
  });
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
