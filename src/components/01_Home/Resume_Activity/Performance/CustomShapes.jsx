const CustomCursor = ({ points, width }) => {
    const { x } = points[0]; // récupère la position x de la ligne
    return (
        <rect
            x={x - width / 2}
            y={0}
            width={width}
            height={500} // hauteur du curseur, ajuste selon tes besoins
            // stroke="#000"
            fill="rgba(000, 000, 000, 0.1)"
        />
    );
};

const CustomXAxisTick = ({ x = 0, y = 0, payload }) => (
    <text
        x={x + 0} // Si tu veux un padding horizontal, ajuste ici
        y={y + 32} // Ajout de padding vertical de 10px
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

export { CustomXAxisTick, CustomYAxisTick, CustomCursor };
