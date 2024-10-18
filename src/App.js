import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavInterface from "./components/00-Header/NavInterface";
import Home from "./components/01_Home/Home";
import Profile from "./components/02-Profile/Profile";
import Settings from "./components/03-setting/Settings";
import Community from "./components/04-community/Community";

/**
 * App component that sets up the main application structure, including routing.
 * It includes a navigation interface and several routes for different sections of the application.
 *
 * @component
 * @returns {JSX.Element} The rendered App component with navigation and routing.
 */
function App() {
    return (
        <BrowserRouter>
            <div className="main-container">
                <NavInterface />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Home />} />{" "}
                    {/* Dynamic route for user ID */}
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/setting" element={<Settings />} />
                    <Route path="/community" element={<Community />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
