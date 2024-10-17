import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.scss";
import { UserProvider } from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <UserProvider userValue={18} isMocked={true}>
            <App />
        </UserProvider>
    </React.StrictMode>
);
