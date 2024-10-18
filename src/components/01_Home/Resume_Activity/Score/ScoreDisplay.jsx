import React from "react";
import PropTypes from "prop-types";
import IncrementalAnimationValue from "../../../../utils/IncrementalAnimationValue"; // Importer le composant IncrementValue

/**
 * ScoreDisplay component that shows the animated score with a specified format and unit.
 * @component
 * @param {Object} props - The component props
 * @param {number} props.finalValue - The target final value to be displayed
 * @param {string} [props.unit="%"] - The unit of the value (default is '%')
 * @param {string} [props.goalText="de votre objectif"] - The text indicating the goal
 * @param {string} [props.className="resume"] - CSS class for styling
 * @param {function} [props.formatNumber] - Function to format the displayed number
 * @param {number} props.delayIncrement - Delay before starting the increment animation
 * @param {number} props.incrementFactor - Factor to control the increment speed
 * @param {number} props.durationBeforeStart - Duration before starting the animation
 * @returns {JSX.Element} The rendered ScoreDisplay component
 */
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

// Define PropTypes for ScoreDisplay
ScoreDisplay.propTypes = {
    finalValue: PropTypes.number.isRequired, // The target final value to be displayed
    unit: PropTypes.string, // The unit of the value (default is '%')
    goalText: PropTypes.string, // The text indicating the goal
    className: PropTypes.string, // CSS class for styling
    formatNumber: PropTypes.func, // Function to format the displayed number
    delayIncrement: PropTypes.number.isRequired, // Delay before starting the increment animation
    incrementFactor: PropTypes.number.isRequired, // Factor to control the increment speed
    durationBeforeStart: PropTypes.number.isRequired, // Duration before starting the animation
};

export default ScoreDisplay;
