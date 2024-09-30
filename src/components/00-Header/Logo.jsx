import React from "react";
import { Link } from "react-router-dom";
import SportSeeLG from "../99-Svg_Icon/SportSeeLG";
import TypoSportSeeLG from "../99-Svg_Icon/TypoSportSeeLG";
import PropTypes from "prop-types";

/**
 * Logo component that renders the SportSee logo with H1-title as a link to the home page.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.title - The title to display alongside the logo
 * @returns {JSX.Element} The rendered Logo component
 */
const Logo = ({ h1 = "SportSee" }) => {
    // Title prop with a default value
    return (
        <Link className="logo" to="/" title="Aller à la page d'accueil">
            <SportSeeLG />
            <TypoSportSeeLG />
            <h1 className="nav-title">{h1}</h1>
        </Link>
    );
};

// Define PropTypes for the Logo component
Logo.propTypes = {
    h1: PropTypes.string, // Title is optional
};

export default Logo;
