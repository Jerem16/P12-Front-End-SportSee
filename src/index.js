import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/main.scss";
import { UserProvider } from "./utils/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

/**
 * Main entry point of the application.
 * This component wraps the App component with UserProvider to manage user data
 * and uses strict mode to help identify potential problems in the application.
 *
 * @returns {JSX.Element} The rendered application component.
 */
root.render(
    <React.StrictMode>
        <UserProvider userValue={18} isMocked={true}>
            <App />
        </UserProvider>
    </React.StrictMode>
);
