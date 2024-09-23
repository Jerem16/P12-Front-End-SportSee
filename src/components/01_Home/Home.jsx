import React from "react";
import PropTypes from "prop-types";
import user from "../../assets/data/user.json"; // Assurez-vous que le chemin d'importation est correct

/**
 * Home component that renders the homepage content.
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
    const firstName = user.data.userInfos.firstName; // Récupération du prénom

    return (
        <main>
            <h2>Bonjour {firstName}</h2>
            {/* Ajoutez le contenu de la page ici */}
        </main>
    );
};

export default Home;
