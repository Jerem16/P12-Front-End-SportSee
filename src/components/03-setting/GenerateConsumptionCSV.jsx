import React, { useState } from "react";
import Papa from "papaparse"; // Pour l'export en CSV
import FetchData from "../../utils/FetchData";
import dataMocked from "../../assets/data/user.json";
import DataLayOut from "../../assets/data/dataLayOut.json";
import { Loader } from "../../components/Loader/Loader"; // Si tu utilises un loader

const GenerateConsumptionCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "";
    const [loading, setLoading] = useState(false);

    const handleGenerateCSV = (apiData) => {
        if (!apiData || !apiData.data || !apiData.data.keyData) {
            alert("Aucune donnée à exporter."); // Si pas de données disponibles
            return;
        }

        const keyData = apiData.data.keyData; // Extraction des données pertinentes

        // Préparation des données à exporter en CSV
        const formattedData = DataLayOut.consumptionData.map((item) => ({
            type: item.type,
            value: keyData[item.type],
            unit: item.unit,
            description: item.image.alt.split(" ")[1], // Extrait une partie de la description
        }));

        if (formattedData.length > 0) {
            // Indiquer que le téléchargement est en cours
            setLoading(true);

            // Convertir les données en CSV
            const csv = Papa.unparse(formattedData);

            // Créer un lien de téléchargement temporaire
            const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `ConsumptionData.csv`); // Nom du fichier CSV
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
                            "Télécharger les données de consommation en CSV"
                        )}
                    </button>
                </div>
            )}
        </FetchData>
    );
};

export default GenerateConsumptionCSV;
