import React from "react";
import PropTypes from "prop-types";
import RelaxIcon from "../99-Svg_Icon/RelaxIcon";
import NatationIcon from "../99-Svg_Icon/NatationIcon";
import CyclistIcon from "../99-Svg_Icon/CyclistIcon";
import MusculationIcon from "../99-Svg_Icon/MusculationIcon";

const SideInterface = (props) => {
    return (
        <div className="side-nav">
            <RelaxIcon />
            <NatationIcon />
            <CyclistIcon />
            <MusculationIcon />
        </div>
    );
};

SideInterface.propTypes = {};

export default SideInterface;
