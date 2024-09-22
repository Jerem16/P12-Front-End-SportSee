import React from "react";
import SideInterface from "./SideInterface";
import Copyright from "./Copyright";

const Sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <SideInterface /><Copyright />
            </div>
            
        </>
    );
};

export default Sidebar;
