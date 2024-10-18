import React, { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

/**
 * ToggleMockDataButton component that allows the user to toggle the use of mocked data.
 * It shows the current status of the mocked data and provides a checkbox to change it.
 *
 * @component
 * @returns {JSX.Element} The rendered ToggleMockDataButton component.
 */
const ToggleMockDataButton = () => {
    const { useMockData, toggleMockData } = useContext(UserContext);

    return (
        <div>
            <div className="button-content">
                <p className="data-text">Données mockées</p>
                <input
                    type="checkbox"
                    onClick={toggleMockData}
                    checked={useMockData}
                    onChange={toggleMockData}
                    className="toggle-checkbox"
                    id="mockDataToggle" // Ajout de l'attribut id
                    name="mockData" // Ajout de l'attribut name
                />
                <label
                    htmlFor="mockDataToggle"
                    className="status-text"
                    type="button"
                >
                    {useMockData ? "activées" : "désactivées"}
                </label>
                <button
                    className="toggle-button"
                    onClick={toggleMockData}
                ></button>
            </div>
        </div>
    );
};

export default ToggleMockDataButton;
