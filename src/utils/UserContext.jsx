import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

export const UserContext = createContext();

/**
 * UserProvider is a context provider component that supplies the user data and controls for using mock data.
 * It provides the ability to toggle between using real data and mock data.
 *
 * @component
 * @param {Object} props - The component's props.
 * @param {React.ReactNode} props.children - The child components that will consume the context.
 * @param {number} props.userValue - The initial user ID value for the context.
 * @param {boolean} props.isMocked - A flag indicating whether to use mocked data or real data.
 * @returns {JSX.Element} The UserContext provider wrapping the children components.
 */
export const UserProvider = ({ children, userValue, isMocked }) => {
    const [userId, setUserId] = useState(userValue); // State to track the current user ID
    const [useMockData, setUseMockData] = useState(isMocked); // State to toggle between mock data and real data

    /**
     * Toggles the `useMockData` state between true and false.
     */
    const toggleMockData = () => {
        setUseMockData((prevState) => !prevState);
    };

    // Memoized value to provide as the context
    const contextValue = useMemo(
        () => ({
            userId,
            setUserId,
            useMockData,
            setUseMockData,
            toggleMockData,
        }),
        [userId, useMockData]
    );

    return (
        <UserContext.Provider value={contextValue}>
            {children}
        </UserContext.Provider>
    );
};

UserProvider.propTypes = {
    children: PropTypes.node.isRequired, // The children components wrapped by the provider
    userValue: PropTypes.number.isRequired, // The initial user ID value
    isMocked: PropTypes.bool.isRequired, // A flag indicating whether to use mocked data
};
