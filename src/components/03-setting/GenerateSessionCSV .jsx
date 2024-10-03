import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import Papa from "papaparse"; // Pour l'export en CSV
import dataMocked from "../../assets/data/sessions.json";
import { Loader } from "../../components/Loader/Loader"; // Si tu utilises un loader

const GenerateSessionCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "average-sessions";
    const [loading, setLoading] = useState(false);

    // Fonction pour convertir les jours en abréviations
    function convertDayToLetter(day) {
        const dayMap = {
            1: "L", // 
            2: "Me", // Mardi
            3: "M", // Mercredi
            4: "J", // Jeudi
            5: "V", // Vendredi
            6: "S", // Samedi
            7: "D", // Dimanche
        };
        return dayMap[day] || ""; // Retourne une chaîne vide si le jour n'est pas valide
    }

    const handleGenerateCSV = (apiData) => {
        if (!apiData || !apiData.data || !apiData.data.sessions) {
            alert("Aucune donnée à exporter."); // Si pas de données disponibles
            return;
        }

        // Traitement des données
        let formattedData = apiData.data.sessions;

        // Conversion des jours en lettres
        formattedData = formattedData.map((session) => ({
            ...session,
            jday: convertDayToLetter(session.day), // Ajout de jday
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
            link.setAttribute("download", `SessionLengthData.csv`); // Nom du fichier CSV
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
                            "Télécharger les données des sessions en CSV"
                        )}
                    </button>
                </div>
            )}
        </FetchData>
    );
};

export default GenerateSessionCSV;
