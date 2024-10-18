import React, { useContext } from "react";
import WeeklyActivityTitle from "./WeeklyActivityTitle";
import FetchData from "../../../utils/FetchData";
import dataMocked from "../../../assets/data/activity.json";
import { UserContext } from "../../../utils/UserContext";
import { fetchActivities } from "../../../utils/apiEndpoints";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";
import {
    CustomBarShape,
    CustomXAxisTick,
    CustomYAxisTick,
} from "./CustomShapes";

/**
 * WeeklyActivityCharts component that displays a bar chart of weekly activity.
 * @component
 * @constant {string} path - Base URL for the API,
 * @constant {string} endPoint - Endpoint for fetching data from the API.
 * @returns {JSX.Element} The rendered WeeklyActivityCharts component
 */
const WeeklyActivityCharts = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "activity";

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                // Appelle la fonction pour obtenir les données des activités
                const activities = fetchActivities(apiData);

                // Vérifie que les données des activités existent avant de les formater
                const formattedData = Array.isArray(activities)
                    ? activities.map((item, index) => ({
                          ...item,
                          index: index + 1,
                      }))
                    : [];

                const minKg =
                    Math.min(...formattedData.map((d) => d.kilogram)) - 1;
                const maxKg =
                    Math.max(...formattedData.map((d) => d.kilogram)) + 2;

                return (
                    <>
                        <WeeklyActivityTitle />
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                fill="#000"
                                data={formattedData}
                                margin={{
                                    top: 65,
                                    right: 30,
                                    left: 43,
                                    bottom: 32,
                                }}
                            >
                                <CartesianGrid
                                    stroke="#DEDEDE"
                                    strokeDasharray="3 3"
                                    vertical={false}
                                    strokeWidth={0.75}
                                />
                                <XAxis
                                    dataKey="index"
                                    tickLine={false}
                                    stroke="#DEDEDE"
                                    interval={0}
                                    strokeWidth={1.25}
                                    tick={<CustomXAxisTick />}
                                    padding={{ left: -49, right: -47 }}
                                />
                                <YAxis
                                    domain={[minKg, maxKg]}
                                    dataKey="kilogram"
                                    yAxisId="right"
                                    orientation="right"
                                    tickLine={false}
                                    tick={<CustomYAxisTick />}
                                    axisLine={false}
                                    interval={1}
                                />
                                <YAxis
                                    dataKey="calories"
                                    yAxisId="left"
                                    orientation="left"
                                    tickLine={false}
                                    tickFormatter={(value) =>
                                        `${(value / 1000).toFixed(1)} kCal`
                                    }
                                    hide
                                />
                                <Tooltip
                                    cursor={{ fill: "#c4c4c4", opacity: "0.5" }}
                                    content={({ active, payload }) => {
                                        if (
                                            active &&
                                            payload &&
                                            payload.length > 0
                                        ) {
                                            return (
                                                <div className="tooltip-weekly_activity">
                                                    <div>
                                                        <div>
                                                            <span>
                                                                {
                                                                    payload[0]
                                                                        .payload
                                                                        .kilogram
                                                                }
                                                            </span>{" "}
                                                            <span>Kg</span>
                                                        </div>
                                                        <div>
                                                            <span>
                                                                {
                                                                    payload[0]
                                                                        .payload
                                                                        .calories
                                                                }
                                                            </span>{" "}
                                                            <span>Kcal</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Legend
                                    layout="horizontal"
                                    verticalAlign="top"
                                    align="right"
                                    iconType="circle"
                                    iconSize={8}
                                    wrapperStyle={{
                                        top: 15,
                                        right: 6,
                                        borderRadius: "10px",
                                        padding: "10px",
                                        lineHeight: "24px",
                                        fontSize: "14px",
                                        fontFamily: "Roboto, sans-serif",
                                    }}
                                />
                                <Bar
                                    dataKey="kilogram"
                                    fill="#282d30"
                                    barSize={8}
                                    yAxisId="right"
                                    name="Poids (kg)"
                                    shape={<CustomBarShape />}
                                />
                                <Bar
                                    dataKey="calories"
                                    fill="#e60000"
                                    barSize={8}
                                    yAxisId="left"
                                    name="Calories brûlées (kCal)"
                                    shape={<CustomBarShape />}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </>
                );
            }}
        </FetchData>
    );
};

// There is no PropTypes here.

export default WeeklyActivityCharts;
