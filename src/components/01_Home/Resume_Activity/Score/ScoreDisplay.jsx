import React from "react";
import IncrementalAnimationValue from "../../../../utils/IncrementalAnimationValue"; // Importer le composant IncrementValue

const ScoreDisplay = ({
    finalValue, // Valeur cible finale
    unit = "%", // Unité de la valeur (par défaut '%')
    goalText = "de votre objectif", // Texte par défaut pour l'objectif
    className = "resume", // Classe CSS pour le style
    formatNumber = (value) => value.toLocaleString("fr-FR"), // Fonction de formatage du nombre
    delayIncrement, // Props à transmettre à IncrementValue
    incrementFactor,
    durationBeforeStart,
}) => {
    // Utilisation du composant IncrementValue pour obtenir la valeur animée
    const animatedValue = IncrementalAnimationValue({
        finalValue,
        delayIncrement,
        incrementFactor,
        durationBeforeStart,
    });

    return (
        <p className={className}>
            {typeof animatedValue === "number"
                ? `${formatNumber(animatedValue)}${unit}`
                : `0${unit}`}{" "}
            <span>{goalText}</span>
        </p>
    );
};

export default ScoreDisplay;
