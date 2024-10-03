import React from "react";
import PropTypes from "prop-types";
import GenerateActivityCSV from "./GenerateActivityCSV";
import GenerateScoreCSV from "./GenerateScoreCSV";
import GeneratePerformanceCSV from "./GeneratePerformanceCSV";
import GenerateSessionCSV from "./GenerateSessionCSV ";
import GenerateConsumptionCSV from "./GenerateConsumptionCSV";

/**
 * Settings component that allows users to adjust their preferences.
 * @component
 * @returns {JSX.Element} The rendered Settings component
 */
const Settings = () => {
    return (
        <main>
            <h2>Réglages</h2>
            <GenerateActivityCSV />
            <GenerateScoreCSV />
            <GeneratePerformanceCSV />
            <GenerateSessionCSV />
            <GenerateConsumptionCSV />
        </main>
    );
};

export default Settings;
