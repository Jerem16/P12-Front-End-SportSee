import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import RelaxIcon from "../99-Svg_Icon/RelaxIcon";
import NatationIcon from "../99-Svg_Icon/NatationIcon";
import CyclistIcon from "../99-Svg_Icon/CyclistIcon";
import MusculationIcon from "../99-Svg_Icon/MusculationIcon";
import sideIcons from "../../assets/data/sideIcons.json";

/**
 * SideInterface component that renders the side navigation with icons.
 * @component
 * @returns {JSX.Element} The rendered SideInterface component
 */
const SideInterface = ({ id, name, title, alt }) => {
    const iconComponents = {
        RelaxIcon: RelaxIcon,
        NatationIcon: NatationIcon,
        CyclistIcon: CyclistIcon,
        MusculationIcon: MusculationIcon,
    };

    return (
        <div className="side-nav">
            {sideIcons.map((icon) => {
                const IconComponent = iconComponents[icon.name];
                return (
                    <Link key={icon.id} title={icon.title}>
                        <IconComponent alt={icon.alt} />
                    </Link>
                );
            })}
        </div>
    );
};

SideInterface.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
};

export default SideInterface;
