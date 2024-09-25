import React, { useEffect, useState } from "react";
import { getDataFromApi } from "./api";


const DataJsonToJs2 = ({
    baseURL,
    endpoint,
    dataMocked,
    useMockData = false,
    formatData,
    children,
}) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                console.log("Fetching data with useMockData:", useMockData);

                const result = await getDataFromApi(
                    baseURL,
                    endpoint,
                    useMockData,
                    dataMocked
                );

                const formattedData = result;

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
            {children(data)} 
        </div>
    );
};

export default DataJsonToJs2;
