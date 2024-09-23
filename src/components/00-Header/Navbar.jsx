import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";
import navLinks from "../../assets/data/navLinks.json";

/**
 * Navbar component that renders the main navigation bar with links and a logo.
 * @component
 * @returns {JSX.Element} The rendered Navbar component
 */
const Navbar = () => {
    return (
        <header className="nav-bar">
            <Logo />
            <section className="link-group">
                {navLinks.map((link) => (
                    <NavLink
                        key={link.id}
                        label={link.label}
                        path={link.path}
                        title={link.title}
                    />
                ))}
            </section>
        </header>
    );
};

export default Navbar;
