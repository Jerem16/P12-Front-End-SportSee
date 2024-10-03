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

const ResumeActivity = () => {
    const [visibleCharts, setVisibleCharts] = useState([]);
    const durationBeforeStart = 1000; // Délai avant de commencer l'animation (en ms)
    const delayBetweenCharts = 500; // Délai entre chaque graphique (en ms)

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

export default ResumeActivity;
