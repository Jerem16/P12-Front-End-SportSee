import React, { useEffect, useState } from "react";

const IncrementalAnimationValue = ({
  finalValue,         // Valeur cible finale
  delayIncrement = 50, // Délai initial entre chaque incrément
  incrementFactor = 100, // Facteur pour calculer l'incrément
  durationBeforeStart = 1000, // Durée avant de commencer l'animation (1 seconde par défaut)
}) => {
  const [animatedValue, setAnimatedValue] = useState(0); // État pour la valeur animée

  useEffect(() => {
    if (finalValue > 0) {
      let currentValue = 0;
      const increment = Math.ceil(finalValue / incrementFactor); // Calcul de l'incrément
      let delay = delayIncrement; // Délai initial

      const animateValue = () => {
        if (currentValue < finalValue) {
          currentValue += increment;
          if (currentValue > finalValue) currentValue = finalValue; // Ne pas dépasser la cible
          setAnimatedValue(currentValue); // Mettre à jour l'état

          // Réduire le délai pour une animation plus fluide
          delay -= 1;
          setTimeout(animateValue, delay);
        }
      };

      const timeout = setTimeout(animateValue, durationBeforeStart); // Démarrer après un délai

      return () => clearTimeout(timeout); // Nettoyage
    }
  }, [finalValue, delayIncrement, incrementFactor, durationBeforeStart]);

  return animatedValue; // Retourner la valeur animée
};

export default IncrementalAnimationValue;
