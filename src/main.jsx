import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./assets/css/animate.css";
import "./assets/bootstarp/bootstrap.min.css";
import "./assets/css/super-classes.css";
import "./assets/css/style.css";
import "./assets/css/mobile.css";
import { RouterProvider } from "react-router-dom";
import MainRouter from "./Routers/MainRouter/MainRouter";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={MainRouter} />
    </React.StrictMode>
);
