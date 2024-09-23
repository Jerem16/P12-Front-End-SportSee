import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

/**
 * NavLink component that renders a navigation link.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.label - The text label for the link
 * @param {string} props.path - The destination path for the link
 * @param {string} props.title - The title of the link for accessibility
 * @returns {JSX.Element} The rendered NavLink component
 */
const NavLink = ({ label, path, title }) => {
    return (
        <div className="link-button">
            <Link className="nav-link" to={path} title={title}>
                {label}
            </Link>
        </div>
    );
};

NavLink.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavLink;
