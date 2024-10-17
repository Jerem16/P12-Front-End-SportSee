import React, { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

const ToggleMockDataButton = () => {
    const { useMockData, toggleMockData } = useContext(UserContext);

    return (
        <div>
            <button className="toggle-button" onClick={toggleMockData}>
                <div className="button-content">
                    <p className="data-text">Données mockées</p>
                    <input
                        onClick={toggleMockData}
                        type="checkbox"
                        checked={useMockData}
                        onChange={toggleMockData}
                        className="toggle-checkbox"
                    />
                    <p className="status-text">
                        {useMockData ? "activées" : "désactivées"}
                    </p>
                </div>
            </button>
        </div>
    );
};

export default ToggleMockDataButton;
