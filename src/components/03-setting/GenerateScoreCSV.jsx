import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import CSVButton from "./CSVButton";
import dataMocked from "../../assets/data/user.json";
import { todayScore } from "../../utils/apiEndpoints"; // Vérifier que le chemin est correct

const GenerateScoreCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "";
    const title = "todayScore";
    const name = `${title.charAt(0).toUpperCase()}${title.slice(1)}`; // "TodayScore"
    const [loading, setLoading] = useState(false);

    const handleGenerateCSVData = (apiData) => {
        const score = todayScore(apiData); // Obtenir le score

        if (score !== undefined && score !== null) {
            // Formater les données pour Papa.parse
            return [{ name: "Score", value: score * 100 }]; // Convertir en pourcentage
        }

        return []; // Retourner un tableau vide si pas de score
    };

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                const csvData = handleGenerateCSVData(apiData); // Générer les données CSV
                return (
                    <CSVButton
                        data={csvData}
                        fileName={name}
                        isLoading={loading}
                        setLoading={setLoading}
                        buttonText={`Télécharger les données de ${name} au format CSV`}
                    />
                );
            }}
        </FetchData>
    );
};

export default GenerateScoreCSV;
