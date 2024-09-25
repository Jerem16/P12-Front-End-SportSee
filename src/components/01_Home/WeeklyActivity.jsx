import React, { useEffect, useState, useMemo } from "react";
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
import WeeklyActivityTitle from "./WeeklyActivityTitle";
import { Loading } from "../Loader/Loader";

const CustomBarShape = (props) => {
    const { x, y, width, height, fill } = props;
    const radius = 4.3;

    return (
        <path
            d={`
                M${x},${y + height}
                v${-height + radius}
                a${radius},${radius} 0 0 1 ${radius},${-radius}
                h${width - 2 * radius}
                a${radius},${radius} 0 0 1 ${radius},${radius}
                v${height - radius}
                z
            `}
            fill={fill}
        />
    );
};

const CustomXAxisTick = ({ x = 0, y = 0, payload }) => (
    <text
        x={x}
        y={y + 24} // Padding
        textAnchor="middle"
        fontSize={14}
        fontFamily="Roboto, sans-serif"
        fill="#9B9EAC"
    >
        {payload.value}
    </text>
);

const CustomYAxisTick = ({ x = 0, y = 0, payload }) => (
    <text
        x={x + 36} // Padding
        y={y}
        textAnchor="end"
        fontSize={14}
        fontFamily="Roboto, sans-serif"
        fill="#9B9EAC"
    >
        {payload.value}
    </text>
);

const WeeklyActivity = () => {
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState(null); // Set default to null for object

    useEffect(() => {
        async function getData() {
            setDataLoading(true);
            try {
                const response = await fetch(
                    `http://localhost:3000/user/12/activity`
                );
                const data = await response.json();
                console.log(data);
                setApiData(data); // API data should be saved properly
            } catch (err) {
                setError(err);
            } finally {
                setDataLoading(false);
            }
        }
        getData();
    }, []);

    if (error) {
        return <div>Une erreur est survenue : {error.message}</div>;
    }

    const formattedData = apiData?.data?.activities || []; // Access data.activities

    const minKg = Math.min(...formattedData.map((d) => d.kilogram)) - 1;
    const maxKg = Math.max(...formattedData.map((d) => d.kilogram)) + 2;
    console.log("apiData", apiData);

    return (
        <>
            <WeeklyActivityTitle />
            {isDataLoading ? (
                <div className="loader-wrapper">
                    <Loading />
                    <p className="weekly_activity-title">
                        Chargement des données...
                    </p>
                </div>
            ) : (
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={600}
                        height={320}
                        data={formattedData} // Use formattedData here
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
                            dataKey="day"
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
                            cursor={{
                                fill: "#c4c4c4",
                                opacity: "0.5",
                            }}
                            content={({ active, payload }) => {
                                if (active && payload && payload.length > 0) {
                                    return (
                                        <div className="tooltip-weekly_activity">
                                            <div className="grid grid-cols-2 gap-2">
                                                <div>
                                                    <span>
                                                        {
                                                            payload[0].payload
                                                                .kilogram
                                                        }
                                                    </span>{" "}
                                                    <span>Kg</span>
                                                </div>
                                                <div>
                                                    <span>
                                                        {
                                                            payload[0].payload
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
                                zIndex: "1000",
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
            )}
        </>
    );
};

export default WeeklyActivity;
