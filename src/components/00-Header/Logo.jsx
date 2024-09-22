import React from "react";
import { Link } from "react-router-dom";
import SportSeeLG from "../99-Svg_Icon/SportSeeLG";

const Logo = () => {
    return (
        <Link className="logo" to="/">
            <SportSeeLG />
            <h1 className="nav-title">SportSee</h1>
        </Link>
    );
};

export default Logo;
