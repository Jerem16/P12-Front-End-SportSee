import React, { useContext } from "react";
import FetchData from "../../../../utils/FetchData";
import convertDayToLetter from "../../../../utils/convertDayToLetter";
import dataMocked from "../../../../assets/data/sessions.json";
import SessionLengthTitle from "./SessionLengthTitle";
import { CustomXAxisTick, CustomCursor, CustomActiveDot } from "./CustomShapes";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const SessionLengthCharts = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "average-sessions";

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                // Récupération et formatage des données
                let formattedData = apiData?.data?.sessions || [];

                // Conversion des jours en lettres
                formattedData = formattedData.map((session) => ({
                    ...session,
                    jday: convertDayToLetter(session.day), // Ajout de jday
                }));
                // Ajout d'un élément au début et à la fin
                formattedData = [
                    { day: 0, sessionLength: 0, jday: 0 }, // Ajouter au début
                    ...formattedData,
                    { day: "", sessionLength: 0, jday: "" }, // Ajouter à la fin
                ];

                return (
                    <>
                        <SessionLengthTitle />
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart
                                data={formattedData}
                                margin={{
                                    top: 90,
                                    right: -7,
                                    left: -7,
                                    bottom: 32,
                                }}
                            >
                                <CartesianGrid
                                    stroke="#DEDEDE"
                                    // strokeDasharray="9 9"
                                    horizontal={false}
                                    vertical={false}
                                    strokeWidth={0.75}
                                />
                                <XAxis
                                    dataKey="jday"
                                    tickLine={false}
                                    stroke="#DEDEDE"
                                    scale="point"
                                    type={"category"}
                                    interval={0}
                                    padding={{ left: -10, right: -10 }}
                                    tick={<CustomXAxisTick />}
                                    axisLine={false}
                                />
                                <YAxis
                                    dataKey="sessionLength"
                                    tickLine={false}
                                    hide
                                />
                                <Tooltip
                                    position="relative"
                                    style={{ position: "relative" }}
                                    cursor={<CustomCursor width={40} />}
                                    offset={50}
                                    dot={false}
                                    content={({ active, payload }) => {
                                        if (
                                            active &&
                                            payload &&
                                            payload.length > 0
                                        ) {
                                            return (
                                                <div className="tooltip-weekly_activity">
                                                    <div>
                                                        <span>
                                                            {
                                                                payload[0]
                                                                    .payload
                                                                    .sessionLength
                                                            }
                                                        </span>{" "}
                                                        <span>min</span>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                                <Line
                                    dataKey="sessionLength"
                                    stroke="url(#lineGradient)"
                                    fill="url(#lineGradient)"
                                    strokeWidth={2}
                                    type="monotone"
                                    dot={false} // Désactive les dots réguliers
                                    activeDot={<CustomActiveDot />} // Utilise le dot personnalisé
                                />
                                <defs>
                                    <linearGradient
                                        id="lineGradient"
                                        x1="1"
                                        y1="0"
                                        x2="0"
                                        y2="1"
                                    >
                                        <stop
                                            offset="0%"
                                            stopColor="#FFF"
                                            stopOpacity={1}
                                        />
                                        <stop
                                            offset="100%"
                                            stopColor="rgba(255, 255, 255, 0.11)"
                                            stopOpacity={0.403191}
                                        />
                                    </linearGradient>
                                </defs>
                            </LineChart>
                        </ResponsiveContainer>
                    </>
                );
            }}
        </FetchData>
    );
};

export default SessionLengthCharts;
