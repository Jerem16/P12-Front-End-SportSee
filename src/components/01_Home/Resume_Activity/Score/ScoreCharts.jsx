import React from "react";
import ScoreTitle from "./ScoreTitle";
import FetchData from "../../../../utils/FetchData";
import dataMocked from "../../../../assets/data/user.json";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import ScoreDisplay from "./ScoreDisplay";

/**
 * ScoreCharts component that renders a pie chart displaying the user's score for the day.
 * It fetches data from an API or uses mocked data if specified.
 * @component
 * @constant {string} path - Base URL for the API,
 * @constant {string} endPoint - Endpoint for fetching data from the API.
 * @returns {JSX.Element} The rendered ScoreCharts component
 */
const ScoreCharts = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "";

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                // Supposons que todayScore retourne 0.12 (12%)
                const todayScore = apiData?.data?.todayScore;

                // Formatage des données pour PieChart
                const formattedData = [
                    { name: "Score", value: todayScore * 100 },
                    { name: "Remaining", value: (1 - todayScore) * 100 },
                ];

                return (
                    <>
                        <ScoreTitle />
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={formattedData}
                                    dataKey="value"
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={76}
                                    outerRadius={90}
                                    startAngle={80} // Pour débuter à 12h
                                    endAngle={440} // Pour faire un cercle complet
                                    fill=""
                                    cornerRadius={50}
                                    label={false} // Pas de labels
                                >
                                    {/* Premier segment (Score) */}
                                    <Cell
                                        key="score"
                                        fill="#FF0000"
                                        stroke="#FBFBFB"
                                    />

                                    {/* Second segment (Remaining) */}

                                    <Cell
                                        key="remaining"
                                        fill="#FBFBFB"
                                        stroke="#FBFBFB"
                                    />
                                </Pie>
                            </PieChart>
                        </ResponsiveContainer>
                        <ScoreDisplay
                            finalValue={formattedData[0].value}
                            goalText="de votre objectif"
                            delayIncrement={50}
                            incrementFactor={100}
                            durationBeforeStart={200}
                        />
                    </>
                );
            }}
        </FetchData>
    );
};

// There is no PropTypes here.

export default ScoreCharts;
