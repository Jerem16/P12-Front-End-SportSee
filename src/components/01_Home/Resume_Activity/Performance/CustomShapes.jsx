import React from "react";
import PropTypes from "prop-types";

/**
 * CustomCursor component that renders a custom cursor for a chart.
 * @component
 * @param {Object} props - The component props
 * @param {Array} props.points - The points to determine the cursor position
 * @param {number} props.width - The width of the cursor
 * @returns {JSX.Element} The rendered custom cursor
 */
const CustomCursor = ({ points, width }) => {
    const { x } = points[0]; // récupère la position x de la ligne
    return (
        <rect
            x={x - width / 2}
            y={0}
            width={width}
            height={500} // hauteur du curseur, ajuste selon tes besoins
            fill="rgba(0, 0, 0, 0.1)"
        />
    );
};

// Define PropTypes for CustomCursor
CustomCursor.propTypes = {
    points: PropTypes.arrayOf(
        PropTypes.shape({
            x: PropTypes.number,
        })
    ),
    width: PropTypes.number,
};

/**
 * CustomXAxisTick component that renders a custom tick for the X axis of a chart.
 * @component
 * @param {Object} props - The component props
 * @param {number} props.x - The x position of the tick
 * @param {number} props.y - The y position of the tick
 * @param {Object} props.payload - The tick payload containing the value
 * @returns {JSX.Element} The rendered custom X axis tick
 */
const CustomXAxisTick = ({ x = 0, y = 0, payload }) => (
    <text
        x={x}
        y={y + 32} // Ajout de padding vertical
        textAnchor="middle"
        fontFamily="Roboto, sans-serif"
        fontSize={12}
        fill="#fff"
        opacity={0.5}
        width={100}
    >
        {payload.value[0]}
    </text>
);

// Define PropTypes for CustomXAxisTick
CustomXAxisTick.propTypes = {
    x: PropTypes.number, // Position x of the tick
    y: PropTypes.number, // Position y of the tick
    payload: PropTypes.shape({
        value: PropTypes.array, // Must be an array
    }), // Payload containing the tick value
};

/**
 * CustomYAxisTick component that renders a custom tick for the Y axis of a chart.
 * @component
 * @param {Object} props - The component props
 * @param {number} props.x - The x position of the tick
 * @param {number} props.y - The y position of the tick
 * @param {Object} props.payload - The tick payload containing the value
 * @returns {JSX.Element} The rendered custom Y axis tick
 */
const CustomYAxisTick = ({ x = 0, y = 0, payload }) => (
    <text
        x={x + 36} // Padding
        y={y}
        textAnchor="end"
        fontSize={14}
        fontFamily="Roboto, sans-serif"
        fill="#9B9EAC"
    >
        {payload.value}
    </text>
);

// Define PropTypes for CustomYAxisTick
CustomYAxisTick.propTypes = {
    x: PropTypes.number, // Position x of the tick
    y: PropTypes.number, // Position y of the tick
    payload: PropTypes.shape({
        value: PropTypes.any, // The value of the tick (can be any type)
    }), // Payload containing the tick value
};

// Export the components
export { CustomCursor, CustomXAxisTick, CustomYAxisTick };
