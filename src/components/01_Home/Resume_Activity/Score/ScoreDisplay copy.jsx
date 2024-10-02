import React, { useEffect, useState } from "react";

const ScoreDisplay = ({ finalValue }) => {
    const [animatedValue, setAnimatedValue] = useState(0); // État pour la valeur animée

    useEffect(() => {
        if (finalValue > 0) {
            let currentValue = 0; // Valeur actuelle
            const increment = Math.ceil(finalValue / 100); // Incrément pour chaque intervalle
            let delay = 50; // Durée initiale de l'intervalle

            // Fonction pour animer la progression avec délai croissant
            const animateValue = () => {
                if (currentValue < finalValue) {
                    currentValue += increment; // Incrémenter la valeur
                    if (currentValue > finalValue) currentValue = finalValue; // Ne pas dépasser la valeur cible
                    setAnimatedValue(currentValue); // Mettre à jour l'état

                    // Augmenter le délai à chaque cycle
                    delay -= 1;

                    // Appeler récursivement avec un délai augmenté
                    setTimeout(animateValue, delay);
                }
            };

            // Attendre 1 seconde avant de commencer l'animation
            const timeout = setTimeout(animateValue, 0); 

            return () => clearTimeout(timeout); // Nettoyage du timeout à la fin
        }
    }, [finalValue]); // Démarrer l'animation lorsque finalValue change

    return (
        <p className="resume">
            {typeof animatedValue === "number"
                ? `${Number(animatedValue).toLocaleString("fr-FR")}%`
                : "0%"}{" "}
            <span>de votre objectif</span>
        </p>
    );
};

export default ScoreDisplay;
