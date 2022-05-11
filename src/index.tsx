import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/components/app/app";
import config from "@/config/config";

if ("serviceWorker" in navigator && config.env === "production") {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./sw.js")
      .then((registration) => {
        registration.onupdatefound = () => {
          console.log("new version");
          registration
            .update()
            .then(() => {
              console.log("updated");
              location.reload();
            })
            .catch((err) => {
              console.error(err);
            });
        };
      })
      .catch((err) => {
        console.error(err);
      });
  });
}

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
