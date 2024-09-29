import React, { createContext, useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({ children, userValue, isMocked }) => {
    const [userId, setUserId] = useState(userValue);
    const [useMockData, setUseMockData] = useState(isMocked);

    return (
        <UserContext.Provider
            value={{ userId, setUserId, useMockData, setUseMockData }}
        >
            {children}
        </UserContext.Provider>
    );
};
