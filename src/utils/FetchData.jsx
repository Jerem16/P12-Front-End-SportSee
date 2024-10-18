import React, { useEffect, useState, useContext } from "react";
import PropTypes from "prop-types"; // Import PropTypes for validation
import { Loading } from "../components/Loader/Loader";
import { UserContext } from "./UserContext";

/**
 * FetchData is a higher-order component that retrieves data from an API or uses mocked data.
 * It displays a loader while fetching the data and handles potential errors.
 *
 * @component
 * @param {string} path - The base URL for the API.
 * @param {string} endPoint - The API endpoint to fetch specific data.
 * @param {Object} dataMocked - Mocked data to use if the `useMockData` flag is true.
 * @param {Function} children - A render prop that takes `apiData` as an argument and returns JSX elements.
 * @returns {JSX.Element} The rendered component with loading state, error handling, and fetched data.
 */
const FetchData = ({ path, endPoint, dataMocked, children }) => {
    // State to handle the loading status, error status, and fetched data
    const [isDataLoading, setDataLoading] = useState(false);
    const [error, setError] = useState(null);
    const [apiData, setApiData] = useState(null);

    // Retrieve userId and useMockData from the UserContext
    const { userId, useMockData } = useContext(UserContext);

    // Fetch data when the component is mounted or when dependencies change
    useEffect(() => {
        async function getData() {
            setDataLoading(true); // Set loading state to true
            try {
                if (useMockData) {
                    setApiData(dataMocked); // Use mocked data if the flag is true
                } else {
                    const response = await fetch(
                        `${path}${userId}/${endPoint}`
                    );
                    if (!response.ok) {
                        throw new Error(`Erreur HTTP : ${response.status}`); // Throw error if the response is not ok
                    }
                    const data = await response.json();
                    setApiData(data); // Store the fetched data
                }
            } catch (err) {
                setError(err); // Store the error if any occurs
            } finally {
                setDataLoading(false); // Set loading state to false after fetching data
            }
        }

        getData(); // Call the async function to fetch data
    }, [path, userId, endPoint, useMockData, dataMocked]); // Dependencies for useEffect

    // If there's an error, display it
    if (error) {
        return <div>Une erreur est survenue : {error.message}</div>;
    }

    // If data is loading, display a loading component
    return (
        <>
            {isDataLoading ? (
                <div className="loader-wrapper">
                    <Loading /> {/* Display the loading spinner */}
                    <p>{`Chargement des données de ${endPoint}`}...</p>
                </div>
            ) : (
                children(apiData) // Once the data is fetched, render the children function with the fetched data
            )}
        </>
    );
};

// Define PropTypes for FetchData
FetchData.propTypes = {
    path: PropTypes.string.isRequired, // The base URL for the API
    endPoint: PropTypes.string.isRequired, // The API endpoint to fetch specific data
    dataMocked: PropTypes.object.isRequired, // Mocked data for use when useMockData is true
    children: PropTypes.func.isRequired, // A render prop function that returns JSX
};

export default FetchData;
