import React from "react";
import SideInterface from "./SideInterface";
import Copyright from "./Copyright";

/**
 * Sidebar component that displays a side navigation interface and a copyright message.
 * @component
 * @returns {JSX.Element} The rendered Sidebar component
 */
const Sidebar = () => {
    return (
        <div className="sidebar">
            <SideInterface />
            <Copyright string={"Copyright, SportSee "} year={2024} />
        </div>
    );
};

export default Sidebar;
