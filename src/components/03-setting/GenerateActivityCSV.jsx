import React, { useState } from "react";
import FetchData from "../../utils/FetchData";
import dataMocked from "../../assets/data/activity.json";
import { fetchActivities } from "../../utils/apiEndpoints";
import CSVButton from "./CSVButton";

const GenerateActivityCSV = () => {
    const path = process.env.REACT_APP_API_URL;
    const endPoint = "activity";
    const [loading, setLoading] = useState(false);

    const formatData = (apiData) => {
        return fetchActivities(apiData);
    };

    return (
        <FetchData path={path} endPoint={endPoint} dataMocked={dataMocked}>
            {(apiData) => {
                const formattedData = formatData(apiData);
                return (
                    <CSVButton
                        data={formattedData}
                        fileName="Activity"
                        isLoading={loading}
                        setLoading={setLoading}
                        buttonText="Données : Mon activité quotidienne"
                    />
                );
            }}
        </FetchData>
    );
};

export default GenerateActivityCSV;
