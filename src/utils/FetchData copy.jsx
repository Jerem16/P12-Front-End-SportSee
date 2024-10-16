import React, { useEffect, useState, useContext } from "react"; // Ajoute useContext ici
import { Loading } from "../components/Loader/Loader";
import { UserContext } from "./UserContext";

const FetchData = ({ path, endPoint, dataMocked, children }) => {
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState(null);

    // Récupère userId et useMockData depuis le contexte
    const { userId, useMockData } = useContext(UserContext);

    useEffect(() => {
        async function getData() {
            setDataLoading(true);
            try {
                if (useMockData) {
                    setApiData(dataMocked);
                } else {
                    const response = await fetch(
                        `${path}${userId}/${endPoint}`
                    );
                    if (!response.ok) {
                        throw new Error(`Erreur HTTP : ${response.status}`);
                    }
                    const data = await response.json();
                    setApiData(data);
                }
            } catch (err) {
                setError(err);
            } finally {
                setDataLoading(false);
            }
        }

        getData();
    }, [path, userId, endPoint, useMockData, dataMocked]); // Vérifie que toutes les dépendances nécessaires sont ici

    if (error) {
        return <div>Une erreur est survenue : {error.message}</div>;
    }

    return (
        <>
            {isDataLoading ? (
                <div className="loader-wrapper">
                    <Loading />
                    <p>{`Chargement des données de ${endPoint}`}...</p>
                </div>
            ) : (
                children(apiData)
            )}
        </>
    );
};

export default FetchData;
