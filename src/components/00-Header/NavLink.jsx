import React from "react";
import { Link } from "react-router-dom";

const NavLink = () => {
    return (
        <>
            <section className="link-group">
                <div className="link-button">
                    <Link className="nav-link" to="/">
                        Accueil
                    </Link>
                </div>
                <div className="link-button">
                    <Link className="nav-link" to="/">
                        Profil
                    </Link>
                </div>
                <div className="link-button">
                    <Link className="nav-link" to="/">
                        Réglage
                    </Link>
                </div>
                <div className="link-button">
                    <Link className="nav-link" to="/">
                        Communauté
                    </Link>
                </div>
            </section>
        </>
    );
};

export default NavLink;
