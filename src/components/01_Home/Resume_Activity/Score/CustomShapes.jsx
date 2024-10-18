import React from "react";
import PropTypes from "prop-types";

/**
 * CustomBarShape component that renders a custom shape for a bar in a chart.
 * @component
 * @param {Object} props - The component props
 * @param {number} props.x - The x position of the bar
 * @param {number} props.y - The y position of the bar
 * @param {number} props.width - The width of the bar
 * @param {number} props.height - The height of the bar
 * @param {string} props.fill - The fill color of the bar
 * @returns {JSX.Element} The rendered custom bar shape
 */
const CustomBarShape = (props) => {
    const { x, y, width, height, fill } = props;
    const radius = 4.3;

    return (
        <path
            d={`
                M${x},${y + height}
                v${-height + radius}
                a${radius},${radius} 0 0 1 ${radius},${-radius}
                h${width - 2 * radius}
                a${radius},${radius} 0 0 1 ${radius},${radius}
                v${height - radius}
                z
            `}
            fill={fill}
        />
    );
};

// Define PropTypes for CustomBarShape
CustomBarShape.propTypes = {
    x: PropTypes.number, // The x position of the bar
    y: PropTypes.number, // The y position of the bar
    width: PropTypes.number, // The width of the bar
    height: PropTypes.number, // The height of the bar
    fill: PropTypes.string, // The fill color of the bar
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
        y={y + 24} // Padding
        textAnchor="middle"
        fontSize={14}
        fontFamily="Roboto, sans-serif"
        fill="#9B9EAC"
    >
        {payload.value}
    </text>
);

// Define PropTypes for CustomXAxisTick
CustomXAxisTick.propTypes = {
    x: PropTypes.number, // The x position of the tick
    y: PropTypes.number, // The y position of the tick
    payload: PropTypes.shape({
        value: PropTypes.any, // The value of the tick (can be of any type)
    }), // Payload containing the value of the tick
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
    x: PropTypes.number, // The x position of the tick
    y: PropTypes.number, // The y position of the tick
    payload: PropTypes.shape({
        value: PropTypes.any, // The value of the tick (can be of any type)
    }), // Payload containing the value of the tick
};

// Export the components
export { CustomBarShape, CustomXAxisTick, CustomYAxisTick };
