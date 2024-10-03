import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import Papa from "papaparse";
import dataMocked from "../../assets/data/user.json";
import { Loader } from "../Loader/Loader";
import { todayScore } from "../../utils/apiEndpoints"; // Assurez-vous que le chemin est correct

const GenerateScoreCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "";
    const title = "todayScore"; // Garder "activity" en minuscules
    const name = `${title.charAt(0).toUpperCase()}${title.slice(1)}`; // Convertir en "Activity"
    const [loading, setLoading] = useState(false);

    const handleGenerateCSV = (apiData) => {
        const score = todayScore(apiData); // Appelle la fonction pour obtenir le score

        // Vérifie si le score existe
        if (score !== undefined && score !== null) {
            // Formater les données en tableau d'objets pour Papa.unparse
            const dataPath = [
                { name: "Score", value: score * 100 }, // Convertir en pourcentage
            ];

            console.log("GenerateScoreCSV", dataPath);

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

export default GenerateScoreCSV;
