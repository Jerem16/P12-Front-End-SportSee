import React from "react";
import PropTypes from "prop-types";
import GenerateActivityCSV from "./GenerateActivityCSV";
import GenerateScoreCSV from "./GenerateScoreCSV";
import GeneratePerformanceCSV from "./GeneratePerformanceCSV";
import GenerateSessionCSV from "./GenerateSessionCSV ";
import GenerateConsumptionCSV from "./GenerateConsumptionCSV";
import ToggleMockDataButton from "./toggleMockData";

/**
 * Settings component that allows users to adjust their preferences.
 * @component
 * @returns {JSX.Element} The rendered Settings component
 */
const Settings = () => {
    return (
        <main>
            <h2 className="hello">Réglages</h2>
            <section className="data-download">
                <h3 className="h3">Téléchargement de données CSV</h3>
                <div className="data-group">
                    <GenerateActivityCSV />
                    <GenerateScoreCSV />
                    <GeneratePerformanceCSV />
                    <GenerateSessionCSV />
                    <GenerateConsumptionCSV />
                </div>
            </section>
            <section className="data-download">
                <h3 className="h3">Mocked Data</h3>
                <ToggleMockDataButton />
            </section>
        </main>
    );
};

export default Settings;
