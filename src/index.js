import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.scss";
import { UserProvider } from "./utils/UserContext";

// import { Provider } from "react-redux";
// import store from "./redux/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // <>
    <React.StrictMode>
        <UserProvider userValue={12} isMocked={false}>
            <App />
        </UserProvider>
    </React.StrictMode>
    // </>
);
