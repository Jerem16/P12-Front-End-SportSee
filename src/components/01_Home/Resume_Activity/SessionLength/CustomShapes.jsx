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

export { CustomBarShape, CustomXAxisTick, CustomYAxisTick };
