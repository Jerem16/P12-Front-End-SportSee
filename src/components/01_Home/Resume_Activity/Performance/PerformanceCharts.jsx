import React from "react";
import FetchData from "../../../../utils/FetchData";
import dataMocked from "../../../../assets/data/performance.json";
import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    RadialBar,
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
            useMockData={true}
            dataMocked={dataMocked}
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
                    <ResponsiveContainer width="100%" height="100%">
                        <RadarChart
                            cx="50%"
                            cy="50%"
                            outerRadius={85}
                            startAngle={90}
                            data={formattedNewData.reverse()}
                        >
                            <PolarGrid radialLines={false} />
                            <PolarAngleAxis
                                dataKey="subject"
                                axisLine={false}
                                tickLine={false}
                                tick={({ payload, x, y }) => {
                                    // Ajustement de la position en fonction des coordonnées
                                    let dx = 0;
                                    let dy = 0;

                                    if (x < 100) {
                                        dx = -20; // Déplace le texte vers la gauche
                                    } else if (x > 200) {
                                        dx = 20; // Déplace le texte vers la droite
                                    }

                                    if (y < 40) {
                                        dy = -10; // Texte en haut, déplacement légèrement vers le haut
                                    } else if (y >= 40 && y <= 190) {
                                        dy = 2.5; // Texte entre deux extrêmes (médiane), déplacement léger vers le bas
                                    } else if (y > 200) {
                                        dy = 15; // Texte en bas, déplacement important vers le bas
                                    }

                                    return (
                                        <text
                                            x={x}
                                            y={y}
                                            textAnchor="middle"
                                            fill="#fff" // Couleur du texte
                                            fontFamily="Roboto" // Police de caractères
                                            fontSize="12px" // Taille de police
                                            fontWeight="500"
                                            dx={dx} // Applique le décalage horizontal
                                            dy={dy} // Applique le décalage vertical
                                        >
                                            {payload.value}
                                        </text>
                                    );
                                }}
                            />
                            <PolarRadiusAxis tick={false} axisLine={false} />
                            <Radar
                                name="Mike"
                                dataKey="value"
                                stroke=""
                                fill="#FF0101"
                                fillOpacity={0.6}
                            />
                        </RadarChart>
                    </ResponsiveContainer>
                );
            }}
        </FetchData>
    );
};

export default PerformanceCharts;
