import React from "react";
import { Link } from "react-router-dom";
import MyLogo from "../99-Svg_Icon/MyLogo";


const Logo = () => {
    return (
        <Link className="logo" to="/">
            <MyLogo />
            <h1 className="nav-title">SportSee</h1>
        </Link>
    );
};

export default Logo;
