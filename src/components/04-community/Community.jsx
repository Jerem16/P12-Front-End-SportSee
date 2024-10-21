import React from "react";
import Users from "./Users";

/**
 * Community component that displays community features.
 * @component
 * @returns {JSX.Element} The rendered Community component
 */
const Community = () => {
    return (
        <main>
            <h2 className="hello">Communauté</h2>
            <div className="container">
                <Users />
            </div>
        </main>
    );
};

export default Community;
