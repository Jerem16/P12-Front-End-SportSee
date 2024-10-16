const fetchApiData = async (path, userId, endPoint) => {
    const url = `${path}${userId}/${endPoint}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(
                `Erreur lors de la récupération des données pour l'ID ${userId}`
            );
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error);
        return null; // Retourne null en cas d'erreur pour éviter une réponse vide
    }
};
