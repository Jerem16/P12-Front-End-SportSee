import React from "react";
import PropTypes from "prop-types";
import Users from "./Users";

/**
 * Community component that displays community features.
 * @component
 * @returns {JSX.Element} The rendered Community component
 */
const Community = () => {
    return (
        <main>
            <h2>Communauté</h2>
            <Users />
        </main>
    );
};

export default Community;
