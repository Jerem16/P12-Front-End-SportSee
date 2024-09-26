import React from "react";
import FetchData from "../../../../utils/FetchData";
import dataMocked from "../../../../assets/data/sessions.json";
import SessionLengthTitle from "./SessionLengthTitle";
import {
    CustomBarShape,
    CustomXAxisTick,
    CustomYAxisTick,
} from "./CustomShapes";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const SessionLength = () => {
    const path = "http://localhost:3000";
    const userId = 12;
    const endPoint = "activity";

    return (
        <FetchData
            path={path}
            userId={userId}
            endPoint={endPoint}
            useMockData={true}
            dataMocked={dataMocked}
        >
            {(apiData) => {
                const formattedData = apiData?.data?.sessions || [];

                return (
                    <>
                        {/* <SessionLengthTitle /> */}
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                width={600}
                                height={320}
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
                                    // interval={0}
                                    // strokeWidth={1.25}
                                    // tick={<CustomXAxisTick />}
                                    // padding={{ left: -49, right: -47 }}
                                />
                                <YAxis
                                    // domain={[minKg, maxKg]}
                                    dataKey="day"
                                    yAxisId="right"
                                    orientation="right"
                                    tickLine={false}
                                    // tick={<CustomYAxisTick />}
                                    // axisLine={false}
                                    // interval={1}
                                />
                                <YAxis
                                    dataKey="sessionLength"
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
                                                    <div className="grid grid-cols-2 gap-2">
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
                                        zIndex: "1000",
                                        borderRadius: "10px",
                                        padding: "10px",
                                        lineHeight: "24px",
                                        fontSize: "14px",
                                        fontFamily: "Roboto, sans-serif",
                                    }}
                                />
                                <Line
                                    dataKey="sessionLength"
                                    fill="#282d30"
                                    barSize={8}
                                    yAxisId="right"
                                    name="Poids (kg)"
                                    shape={<CustomBarShape />}
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </>
                );
            }}
        </FetchData>
    );
};

export default SessionLength;
