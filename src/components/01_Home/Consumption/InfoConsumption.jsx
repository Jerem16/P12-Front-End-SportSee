import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import IncrementalAnimationValue from "../../../utils/IncrementalAnimationValue";

/**
 * InfoConsumption component that displays consumption information including an image, value, unit, and description.
 * @component
 * @param {Object} props - Component props
 * @param {string} props.src - The source URL of the image
 * @param {string} props.alt - The alt text for the image
 * @param {number} props.value - The consumption value to display
 * @param {string} props.unit - The unit of the consumption value (e.g., "kCal")
 * @param {string} props.description - A brief description of the consumption
 * @param {number} props.delay - The delay before the component becomes visible (in milliseconds)
 * @returns {JSX.Element|null} The rendered InfoConsumption component or null if not visible
 */
const InfoConsumption = ({ src, alt, value, unit, description, delay }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Appliquer le délai avant de rendre le composant
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, delay);

        // Nettoyage du timeout lorsque le composant est démonté
        return () => clearTimeout(timer);
    }, [delay]);

    // Si le délai n'est pas écoulé, retourner null (ne pas afficher le composant)
    if (!isVisible) {
        return null;
    }

    return (
        <>
            <img className="img_consumption" src={src} alt={alt} />
            <h3 className="info_consumption">
                {/* Valeur animée */}
                <IncrementalAnimationValue
                    finalValue={value || 0}
                    delayIncrement={50}
                    incrementFactor={25}
                    durationBeforeStart={500}
                />
                {unit}
                <span>{description}</span>
            </h3>
        </>
    );
};

/**
 * PropTypes definition for InfoConsumption.
 */
InfoConsumption.propTypes = {
    src: PropTypes.string.isRequired, // Image source
    alt: PropTypes.string.isRequired, // Image alt text
    value: PropTypes.number.isRequired, // Consumption value
    unit: PropTypes.string.isRequired, // Unit of consumption value
    description: PropTypes.string.isRequired, // Consumption description
    delay: PropTypes.number.isRequired, // Delay before displaying the component
};

export default InfoConsumption;
