import React, { createContext, useState } from "react";

export const MockContext = createContext();

export const UserProvider = ({ children }) => {
    const [userId, setUserId] = useState(true); // Initialiser avec un ID ou autre valeur dynamique

    return (
        <MockContext.Provider value={{ userId, setUserId }}>
            {children}
        </MockContext.Provider>
    );
};
