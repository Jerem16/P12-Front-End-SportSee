import React, { useContext } from "react";
import PropTypes from "prop-types";
import user from "../../assets/data/user.json"; // Assurez-vous que le chemin d'importation est correct
import FetchData from "../../utils/FetchData";
import dataMocked from "../../assets/data/user.json";
import { UserContext } from "../../utils/UserContext";

/**
 * Hello component that renders the Hellopage content.
 * @component
 * @constant {string} path - Base URL for the API,
 * @constant {string} endPoint - Endpoint for fetching data
 * @constant {number} userId - Context Endpoint of the user ID for fetching data
 * @constant {bool} useMockData - Context to selected mocked Data
 * @returns {JSX.Element} The rendered Hello component
 */
const Hello = () => {
    const path = process.env.REACT_APP_API_URL; // Base URL for the API
    const { userId, useMockData } = useContext(UserContext); // Context for user ID and mock data usage
    const endPoint = ""; // Endpoint for fetching data

    return (
        <FetchData
            path={path}
            userId={userId}
            endPoint={endPoint}
            useMockData={useMockData}
            dataMocked={dataMocked}
        >
            {(apiData) => {
                const firstName = apiData?.data?.userInfos?.firstName;

                return (
                    <>
                        <h2 className="hello">
                            Bonjour <span className="name">{firstName}</span>
                        </h2>
                        <p className="support">
                            Félicitations ! Vous avez explosé vos objectifs hier
                            👏
                        </p>
                    </>
                );
            }}
        </FetchData>
    );
};

// Define PropTypes for Hello the Props not defined in component but used in React useContext
Hello.propTypes = {
    userId: PropTypes.number, // Expected user ID type
    useMockData: PropTypes.bool, // Expected type for using mock data
};

export default Hello;
