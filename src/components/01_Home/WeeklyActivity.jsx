import React, { PureComponent, useState } from "react";
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

const data = [
    { day: "2020-07-01", kilogram: 80, calories: 240 },
    { day: "2020-07-02", kilogram: 80, calories: 220 },
    { day: "2020-07-03", kilogram: 81, calories: 280 },
    { day: "2020-07-04", kilogram: 81, calories: 290 },
    { day: "2020-07-05", kilogram: 80, calories: 160 },
    { day: "2020-07-06", kilogram: 78, calories: 162 },
    { day: "2020-07-07", kilogram: 76, calories: 390 },
];

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

export default class WeeklyActivity extends PureComponent {
    render() {
        const formattedData = data.map((entry, index) => {
            return {
                ...entry,
                day: index + 1,
            };
        });

        const minKg = Math.min(...formattedData.map((d) => d.kilogram)) - 1;
        const maxKg = Math.max(...formattedData.map((d) => d.kilogram)) + 2;

        return (
            <>
                <WeeklyActivityTitle />
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={600}
                        height={320}
                        data={formattedData}
                        margin={{
                            top: 65,
                            right: 30,
                            left: 43,
                            bottom: 32,
                        }}
                        // padding={{ left: 10, right: 10 }}
                    >
                        {/* <defs>
                            <linearGradient id="MyGradient">
                                <stop offset="5%" stop-color="green" />
                                <stop offset="95%" stop-color="gold" />
                            </linearGradient>
                        </defs> */}
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
                            // scale="linear"
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
                                fill: "	#c4c4c4",
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
                        <defs>
                            <linearGradient></linearGradient>
                        </defs>
                        <Bar
                            dataKey="kilogram"
                            fill="#282d30"
                            // fill="green"
                            barSize={8}
                            yAxisId="right"
                            name="Poids (kg)"
                            shape={<CustomBarShape />}
                        />
                        <Bar
                            dataKey="calories"
                            fill="#e60000"
                            // fill="green"
                            barSize={8}
                            yAxisId="left"
                            name="Calories brûlées (kCal)"
                            shape={<CustomBarShape />}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </>
        );
    }
}
