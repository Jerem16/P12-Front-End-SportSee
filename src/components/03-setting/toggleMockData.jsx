import React, { useContext } from "react";
import { UserContext } from "../../utils/UserContext";

const ToggleMockDataButton = () => {
    const { useMockData, toggleMockData } = useContext(UserContext);

    return (
        <button onClick={toggleMockData}>
            {useMockData
                ? "Désactiver les données mockées"
                : "Activer les données mockées"}
        </button>
    );
};

export default ToggleMockDataButton;
