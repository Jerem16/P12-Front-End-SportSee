import React, { useEffect, useState } from "react";
import { Loading } from "../components/Loader/Loader";

const FetchData = ({
    path,
    userId,
    endPoint,
    dataMocked,
    useMockData = false,
    children,
}) => {
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState(null);

    useEffect(() => {
        async function getData() {
            setDataLoading(true);
            try {
                if (useMockData) {
                    setApiData(dataMocked);
                } else {
                    const response = await fetch(
                        `${path}/user/${userId}/${endPoint}`
                    );
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
    }, [path, userId, endPoint, useMockData, dataMocked]);

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
