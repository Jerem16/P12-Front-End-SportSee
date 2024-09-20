import React from "react";
import Logo from "./Logo";
import NavLink from "./NavLink";

const Navbar = () => {
    return (
        <header className="nav-bar">
            <Logo />
            <NavLink />
        </header>
    );
};

export default Navbar;
