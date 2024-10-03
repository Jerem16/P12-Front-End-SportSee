import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import Papa from "papaparse";
import dataMocked from "../../assets/data/activity.json";
import { Loader } from "../Loader/Loader";
import { fetchActivities } from "../../utils/apiEndpoints"; // Assurez-vous que le chemin est correct

const GenerateActivityCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "activity"; // Garder "activity" en minuscules
    const name = `${endPoint.charAt(0).toUpperCase()}${endPoint.slice(1)}`; // Convertir en "Activity"
    const [loading, setLoading] = useState(false);

    const handleGenerateCSV = (apiData) => {
        const dataPath = fetchActivities(apiData); // Appelle la fonction pour obtenir les activités

        if (Array.isArray(dataPath) && dataPath.length > 0) {
            console.log("generateCSV", dataPath);

            // Indiquer que le téléchargement est en cours
            setLoading(true);

            // Convertir les données en CSV
            const csv = Papa.unparse(dataPath);

            // Créer un lien de téléchargement temporaire
            const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
            const url = URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.setAttribute("download", `${name}.csv`); // Nom du fichier
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // Réinitialiser l'état de chargement
            setLoading(false);
        } else {
            alert("Aucune donnée à exporter."); // Alerte si pas de données disponibles
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
                            <Loader />
                        ) : (
                            `Télécharger les données de ${name} au format CSV`
                        )}
                    </button>
                </div>
            )}
        </FetchData>
    );
};

export default GenerateActivityCSV;
