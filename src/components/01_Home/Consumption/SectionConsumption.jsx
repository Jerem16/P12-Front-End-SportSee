import React from "react";
import DataLayOut from "../../../assets/data/dataLayOut.json";
import dataMocked from "../../../assets/data/user.json"; // Corrigez cela si nécessaire
import FetchData from "../../../utils/FetchData";
import { Loader } from "../../Loader/Loader";

const SectionConsumption = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "";

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                // Vérification de la structure de apiData
                if (!apiData || !apiData.data) {
                    return <Loader />; // Affiche un message de chargement si les données ne sont pas disponibles
                }

                const keyData = apiData.data.keyData; // Assurez-vous que la structure est correcte
                console.log("keyData", keyData);

                return (
                    <>
                        {DataLayOut.consumptionData.map((item) => (
                            <article
                                key={item.type}
                                className={`detail ${item.type}`}
                            >
                                <img
                                    className="img_consumption"
                                    src={item.image.src}
                                    alt={item.image.alt}
                                />
                                <h3 className="info_consumption">
                                    {keyData[item.type]
                                        ? keyData[item.type].toLocaleString(
                                              "en-US"
                                          )
                                        : "N/A"}
                                    {item.unit}
                                    <span>{item.image.alt.split(" ")[1]}</span>
                                </h3>
                            </article>
                        ))}
                    </>
                );
            }}
        </FetchData>
    );
};

export default SectionConsumption;
