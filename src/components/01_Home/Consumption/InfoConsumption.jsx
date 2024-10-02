import React, { useState, useEffect } from "react";
import IncrementalAnimationValue from "../../../utils/IncrementalAnimationValue";

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

export default InfoConsumption;
