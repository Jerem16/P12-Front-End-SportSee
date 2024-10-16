import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import dataMocked from "../../assets/data/performance.json";
import dataKindFR from "../../assets/data/kind-FR.json";
import CSVButton from "./CSVButton"; // Composant réutilisable pour la génération de CSV

const GeneratePerformanceCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "performance";
    const [loading, setLoading] = useState(false);

    const formatData = (apiData) => {
        if (!apiData || !apiData.data || !apiData.data.kind) return [];

        const kindData = dataKindFR.kind;
        const formattedData = apiData.data.data;

        // Ajouter les noms des sujets (kind) aux données
        return formattedData.map((item) => ({
            ...item,
            subject: kindData[item.kind], // Assigner le nom correct du sujet
        }));
    };

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                const formattedData = formatData(apiData);
                return (
                    <CSVButton
                        data={formattedData}
                        fileName="PerformanceData"
                        isLoading={loading}
                        setLoading={setLoading}
                        buttonText="Télécharger les données de performance en CSV"
                    />
                );
            }}
        </FetchData>
    );
};

export default GeneratePerformanceCSV;
