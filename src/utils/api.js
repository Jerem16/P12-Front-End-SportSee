import axios from "axios";

// Fonction pour récupérer les données depuis l'API ou utiliser des données mockées
export const getDataFromApi = async (
    baseURL,
    endpoint,
    useMockData = false,
    dataMocked = null
) => {
    if (useMockData) {
        // Si useMockData est vrai, renvoyer les données mockées
        console.log("Using mock data:", dataMocked);
        return dataMocked; // Vérifiez bien que les données mockées sont correctes
    }

    const api = axios.create({
        baseURL: baseURL, // URL de base de l'API
        headers: {
            "Content-Type": "application/json",
        },
    });

    try {
        const response = await api.get(endpoint);
        console.log("Response", response.data);
        return response.data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        throw error;
    }
};
