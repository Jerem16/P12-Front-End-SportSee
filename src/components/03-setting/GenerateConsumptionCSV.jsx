import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import dataMocked from "../../assets/data/user.json";
import DataLayOut from "../../assets/data/dataLayOut.json";
import CSVButton from "./CSVButton"; // Import du bouton CSV

const GenerateConsumptionCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "";
    const [loading, setLoading] = useState(false);

    const formatData = (apiData) => {
        if (!apiData || !apiData.data || !apiData.data.keyData) return [];

        const keyData = apiData.data.keyData;
        return DataLayOut.consumptionData.map((item) => ({
            type: item.type,
            value: keyData[item.type],
            unit: item.unit,
            description: item.image.alt.split(" ")[1],
        }));
    };

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                const formattedData = formatData(apiData);
                return (
                    <CSVButton
                        data={formattedData}
                        fileName="ConsumptionData"
                        isLoading={loading}
                        setLoading={setLoading}
                        buttonText="Télécharger les données de consommation en CSV"
                    />
                );
            }}
        </FetchData>
    );
};

export default GenerateConsumptionCSV;
