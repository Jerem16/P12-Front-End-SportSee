import React, { useContext } from "react";
import PropTypes from "prop-types";
import user from "../../assets/data/user.json"; // Assurez-vous que le chemin d'importation est correct
import FetchData from "../../utils/FetchData";
import dataMocked from "../../assets/data/user.json";
import { UserContext } from "../../utils/UserContext";

/**
 * Hello component that renders the Hellopage content.
 * @component
 * @returns {JSX.Element} The rendered Hello component
 */
const Hello = () => {
    // const firstName = user.data.userInfos.firstName; // Récupération du prénom
    const path = process.env.REACT_APP_API_URL;
    const { userId, useMockData } = useContext(UserContext);
    const endPoint = "";

    return (
        <FetchData
            path={path}
            userId={userId}
            endPoint={endPoint}
            useMockData={useMockData}
            dataMocked={dataMocked}
        >
            {(apiData) => {
                // Supposons que todayScore retourne 0.12 (12%)
                const firstName = apiData?.data?.userInfos?.firstName;
                console.log(firstName);

                return (
                    <section className="section-hello">
                        <h2 className="hello">
                            Bonjour <span className="name">{firstName}</span>
                        </h2>
                        <p className="support">
                            Félicitation ! Vous avez explosé vos objectifs hier
                            👏
                        </p>
                    </section>
                );
            }}
        </FetchData>
    );
};

export default Hello;
