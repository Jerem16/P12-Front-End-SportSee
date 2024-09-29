import React from "react";
import SessionLengthCharts from "./SessionLength/SessionLengthCharts";
import PerformanceCharts from "./Performance/PerformanceCharts";
import ScoreCharts from "./Score/ScoreCharts";

const ResumeActivity = () => {
    return (
        <>
            <div className="charts-frame session">
                <SessionLengthCharts />
            </div>
            <div className="charts-frame performance">
                <PerformanceCharts />
            </div>
            <div className="charts-frame score">
                <ScoreCharts />
            </div>
        </>
    );
};

export default ResumeActivity;
