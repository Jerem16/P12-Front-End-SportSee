import React from "react";
import SessionLength from "./SessionLength/SessionLength";

const ResumeActivity = () => {
    return (
        <>
            <div className="charts-frame session">
                <SessionLength />
            </div>
            <div className="charts-frame session">
                <SessionLength />
            </div>
            <div className="charts-frame session">
                <SessionLength />
            </div>
        </>
    );
};

export default ResumeActivity;
