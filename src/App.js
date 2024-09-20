import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import { useSelector } from "react-redux";
import NavInterface from "./components/00-Header/NavInterface";

function App() {
    return (
        <BrowserRouter>
            <div className="main-container">
                <NavInterface />
                <Routes>
                    <Route path="/" />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
