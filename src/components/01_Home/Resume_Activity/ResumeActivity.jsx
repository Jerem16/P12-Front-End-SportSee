import React, { useEffect, useState } from "react";
import SessionLengthCharts from "./SessionLength/SessionLengthCharts";
import PerformanceCharts from "./Performance/PerformanceCharts";
import ScoreCharts from "./Score/ScoreCharts";

const chartData = {
    charts: [
        {
            component: SessionLengthCharts,
            className: "charts-frame session",
        },
        {
            component: PerformanceCharts,
            className: "charts-frame performance",
        },
        {
            component: ScoreCharts,
            className: "charts-frame score",
        },
    ],
};

/**
 * ResumeActivity component that displays a series of charts with animation.
 * It animates the appearance of each chart based on defined delays.
 * @component
 * @constant {number} durationBeforeStart Delay before starting the animation of the charts (ms).
 * @constant {number} delayBetweenCharts Delay between the appearance of each chart (ms).
 * @returns {JSX.Element} The rendered ResumeActivity component
 */
const ResumeActivity = () => {
    /**
     * State to keep track of which charts are currently visible.
     * @type {Array<Object>}
     */
    const [visibleCharts, setVisibleCharts] = useState([]);
    const durationBeforeStart = 1000;
    const delayBetweenCharts = 500;

    useEffect(() => {
        const animateValue = () => {
            chartData.charts.forEach((chart, index) => {
                const timeout = setTimeout(() => {
                    setVisibleCharts((prev) => [...prev, chart]);
                }, (index + index) * delayBetweenCharts); // Délai basé sur l'index
            });
        };

        const timeout = setTimeout(animateValue, durationBeforeStart); // Démarrer après un délai

        // Nettoyage des timeouts lors du démontage du composant
        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            {visibleCharts.map((chart, index) => {
                const ChartComponent = chart.component;
                return (
                    <div
                        key={index}
                        className={`${chart.className} show-display `}
                    >
                        <ChartComponent />
                    </div>
                );
            })}
        </>
    );
};

// There is no PropTypes here.

export default ResumeActivity;
