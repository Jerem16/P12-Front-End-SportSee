import React from "react";
import FetchData from "../../../../utils/FetchData";
import dataMocked from "../../../../assets/data/performance.json";
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const PerformanceCharts = () => {
    const path = "http://localhost:3000";
    const userId = 12;
    const endPoint = "performance";

    return (
        <FetchData
            path={path}
            userId={userId}
            endPoint={endPoint}
            // useMockData={true} 
            // dataMocked={dataMocked}
        >
            {(apiData) => {
                // Vérifiez que les données sont bien présentes
                if (!apiData || !apiData.data || !apiData.data.kind) {
                    return (
                        <div>
                            Les données ne sont pas disponibles ou sont
                            incorrectes
                        </div>
                    );
                }

                let formattedData = apiData.data;
                console.log("formattedData", formattedData);

                const newData = formattedData.data;
                console.log("newData", newData);

                const kindData = formattedData.kind;
                console.log("kindData", kindData);

                // Ajout de 'subject' pour chaque entrée dans 'formattedData'
                const formattedNewData = newData.map((item) => ({
                    ...item,
                    subject: kindData[item.kind], // Assignation du bon nom de sujet
                }));

                console.log("formattedNewData", formattedNewData);

                return (
                    <>
                        <ResponsiveContainer width="100%" height="100%">
                            <RadarChart
                                cx="50%"
                                cy="50%"
                                outerRadius="80%"
                                data={formattedNewData}
                            >
                                <PolarGrid />
                                <PolarAngleAxis dataKey="subject" />
                                <PolarRadiusAxis />
                                <Radar
                                    name="Mike"
                                    dataKey="value" // Utiliser 'value' car c'est l'attribut que vous affichez
                                    stroke="#8884d8"
                                    fill="#8884d8"
                                    fillOpacity={0.6}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </>
                );
            }}
        </FetchData>
    );
};

export default PerformanceCharts;
