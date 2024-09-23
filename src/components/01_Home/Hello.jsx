import React from "react";
import PropTypes from "prop-types";
import user from "../../assets/data/user.json"; // Assurez-vous que le chemin d'importation est correct

/**
 * Hello component that renders the Hellopage content.
 * @component
 * @returns {JSX.Element} The rendered Hello component
 */
const Hello = () => {
    const firstName = user.data.userInfos.firstName; // Récupération du prénom

    return (
        
            <section className="section-hello">
                <h2 className="hello">
                    Bonjour <span className="name">{firstName}</span>
                </h2>
                <p className="support">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            </section>
    );
};

export default Hello;
