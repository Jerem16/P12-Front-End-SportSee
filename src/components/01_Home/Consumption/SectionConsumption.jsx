import React from "react";
import DataLayOut from "../../../assets/data/dataLayOut.json";
import dataMocked from "../../../assets/data/user.json";
import FetchData from "../../../utils/FetchData";
import InfoConsumption from "./InfoConsumption";

/**
 * SectionConsumption component that fetches and displays consumption data.
 * This component renders a series of consumption information cards based on the fetched API data.
 *
 * @component
 * @constant {string} path - Base URL for the API,
 * @constant {string} endPoint - Endpoint for fetching data from the API.
 * @constant {number} decrementDelay - Delay (in milliseconds) for the progressive display
 * @constant {number} baseDelay - Base delay (in milliseconds) between each card.
 * @returns {HTMLElement|null} The rendered SectionConsumption component or null if no data is available
 */
const SectionConsumption = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "";
    const decrementDelay = 250;

    // Délai initial de base entre chaque carte (vous pouvez ajuster cette valeur)
    const baseDelay = 550; // 1000 ms = 1 seconde

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                if (!apiData || !apiData.data) {
                    return null; // Retourne rien si les données ne sont pas disponibles
                }

                const keyData = apiData.data.keyData; // Extraction des données pertinentes

                return (
                    <>
                        {DataLayOut.consumptionData.map((item, index) => (
                            <article
                                key={item.type}
                                className={`detail ${item.type}`}
                            >
                                <InfoConsumption
                                    value={keyData[item.type]}
                                    src={item.image.src}
                                    alt={item.image.alt}
                                    unit={item.unit}
                                    description={item.image.alt.split(" ")[1]}
                                    // Délai progressif : Chaque carte attend un peu plus longtemps que la précédente
                                    delay={
                                        (index + 1) * baseDelay -
                                        index * 1.75 * decrementDelay
                                    }
                                />
                            </article>
                        ))}
                    </>
                );
            }}
        </FetchData>
    );
};

// There is no PropTypes here.

export default SectionConsumption;
