import React, { useEffect, useState } from "react";
import { getDataFromApi } from "./api";
import activityData from "../assets/data/activity.json"; // Assurez-vous que le chemin est correct

const DataJsonToJs = ({
    baseURL,
    endpoint,
    dataMocked = activityData, // Assurez-vous que dataMocked prend la valeur par défaut d'activityData
    useMockData = false,
    formatData,
    children,
}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Appelle l'API pour récupérer les données depuis l'URL
        const fetchData = async () => {
            try {
                console.log("Fetching data with useMockData:", useMockData); // Ajoutez ceci pour déboguer
                const result = await getDataFromApi(
                    baseURL,
                    endpoint,
                    useMockData,
                    dataMocked
                );

                console.log("Raw data received:", result); // Ajoutez ceci pour voir les données non formatées

                const formattedData = formatData ? formatData(result) : result; // Formate les données si formatData est fourni

                console.log("Formatted data:", formattedData); // Ajoutez ceci pour voir les données formatées

                setData(formattedData);
            } catch (error) {
                setError("Erreur lors de la récupération des données.");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [baseURL, endpoint, useMockData, formatData, dataMocked]);

    if (loading) {
        return <p>Chargement...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div>
            {console.log("Final data passed to children:", data)}{" "}
            {/* Ajoutez ceci pour déboguer */}
            {children(data)} {/* Passe les données récupérées aux enfants */}
        </div>
    );
};

export default DataJsonToJs;
