import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import CSVButton from "./CSVButton";
import dataMocked from "../../assets/data/sessions.json";
import convertDayToLetter from "../../utils/convertDayToLetter";

const GenerateSessionCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "average-sessions";
    const [loading, setLoading] = useState(false);

    const handleGenerateCSVData = (apiData) => {
        if (!apiData || !apiData.data || !apiData.data.sessions) {
            return []; // Aucune donnée à exporter
        }

        // Traitement et formatage des données
        return apiData.data.sessions.map((session) => ({
            ...session,
            jday: convertDayToLetter(session.day), // Ajouter les abréviations de jour
        }));
    };

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                const csvData = handleGenerateCSVData(apiData);
                return (
                    <CSVButton
                        data={csvData}
                        fileName="SessionLengthData"
                        isLoading={loading}
                        setLoading={setLoading}
                        buttonText="Télécharger les données des sessions en CSV"
                    />
                );
            }}
        </FetchData>
    );
};

export default GenerateSessionCSV;
