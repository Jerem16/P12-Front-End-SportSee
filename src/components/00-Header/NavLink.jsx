import React from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
    return (
        <>
            <Link className="nav-link" to="/">
                Accueil
            </Link>
            <Link className="nav-link" to="/">
                Profil
            </Link>
            <Link className="nav-link" to="/">
                Réglage
            </Link>
            <Link className="nav-link" to="/">
                Communauté
            </Link>
        </>
    );
};

export default NavLink;
