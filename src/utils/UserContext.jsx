import React, { createContext, useState, useMemo } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children, userValue, isMocked }) => {
    const [userId, setUserId] = useState(userValue);
    const [useMockData, setUseMockData] = useState(isMocked);

    const toggleMockData = () => {
        setUseMockData((prevState) => !prevState);
    };

    // Méthode pour incrémenter l'ID utilisateur
    const incrementUserId = () => {
        setUserId((prevId) => prevId + 1);
    };

    const contextValue = useMemo(
        () => ({
            userId,
            setUserId,
            useMockData,
            setUseMockData,
            toggleMockData,
            incrementUserId, // Ajoute cette méthode au contexte
        }),
        [userId, useMockData]
    );

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};
