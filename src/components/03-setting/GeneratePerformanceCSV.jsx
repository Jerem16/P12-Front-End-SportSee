import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import Papa from "papaparse"; // Pour l'export en CSV
import dataMocked from "../../assets/data/performance.json";
import dataKindFR from "../../assets/data/kind-FR.json";
import { Loader } from "../../components/Loader/Loader"; // Si tu utilises un loader

const GeneratePerformanceCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "performance";
    const [loading, setLoading] = useState(false);

    const handleGenerateCSV = (apiData) => {
        if (!apiData || !apiData.data || !apiData.data.kind) {
            alert("Aucune donnée à exporter."); // Si pas de données disponibles
            return;
        }

        // Traitement des données
        let formattedData = apiData.data;
        const newData = formattedData.data;
        const kindData = dataKindFR.kind;

        // Ajouter les noms des sujets (kind) aux données
        const formattedNewData = newData.map((item) => ({
            ...item,
            subject: kindData[item.kind], // Assigner le nom correct du sujet
        }));

        if (formattedNewData.length > 0) {
            // Indiquer que le téléchargement est en cours
            setLoading(true);

            // Convertir les données en CSV
            const csv = Papa.unparse(formattedNewData);

            // Créer un lien de téléchargement temporaire
            const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `PerformanceData.csv`); // Nom du fichier CSV
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Réinitialiser l'état de chargement
            setLoading(false);
        } else {
            alert("Aucune donnée à exporter."); // Si les données sont vides
        }
    };

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => (
                <div>
                    <button
                        onClick={() => handleGenerateCSV(apiData)}
                        disabled={loading}
                    >
                        {loading ? (
                            <Loader /> // Optionnel, afficher un loader si nécessaire
                        ) : (
                            "Télécharger les données de performance en CSV"
                        )}
                    </button>
                </div>
            )}
        </FetchData>
    );
};

export default GeneratePerformanceCSV;
