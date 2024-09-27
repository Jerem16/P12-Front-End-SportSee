import React from "react";
import SessionLength from "./SessionLength/SessionLength";
import PerformanceCharts from "./Performance/PerformanceCharts";

const ResumeActivity = () => {
    return (
        <>
            <div className="charts-frame session">
                <SessionLength />
            </div>
            <div className="charts-frame performance">
                <PerformanceCharts />
            </div>
            <div className="charts-frame session">
                <SessionLength />
            </div>
        </>
    );
};

export default ResumeActivity;
