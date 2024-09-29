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

const CustomActiveDot = (props) => {
    const { cx, cy } = props; // Utilise cx et cy pour positionner le dot
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x={cx - 9} // Ajuste la position x en fonction de la largeur du SVG
            y={cy - 9.5} // Ajuste la position y en fonction de la hauteur du SVG
            width="18"
            height="19"
            viewBox="0 0 18 19"
            fill="none"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M9 13.8607C11.2091 13.8607 13 12.0809 13 9.88545C13 7.68999 11.2091 5.91022 9 5.91022C6.79086 5.91022 5 7.68999 5 9.88545C5 12.0809 6.79086 13.8607 9 13.8607Z"
                fill="#FFF" // Couleur blanche du remplissage
            />
            <path
                d="M9 16.3607C12.5752 16.3607 15.5 13.4762 15.5 9.88545C15.5 6.29466 12.5752 3.41022 9 3.41022C5.42481 3.41022 2.5 6.29466 2.5 9.88545C2.5 13.4762 5.42481 16.3607 9 16.3607Z"
                stroke="rgba(255, 255, 255, 0.20)" // Stroke avec l'opacité désirée
                strokeWidth="5" // Épaisseur de la bordure
            />
        </svg>
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

export { CustomXAxisTick, CustomCursor, CustomActiveDot };
