/**
 * Converts a numeric day (1-7) into a corresponding letter or abbreviation.
 *
 * @function
 * @param {number} day - The numeric representation of the day (1 for Monday, 2 for Tuesday, etc.).
 * @returns {string} The letter or abbreviation representing the day (e.g., "L" for Lundi), or an empty string if the input is invalid.
 */
const convertDayToLetter = (day) => {
    const dayMap = {
        1: "L", // Lundi
        2: "M", // Mardi
        3: "Me", // Mercredi
        4: "J", // Jeudi
        5: "V", // Vendredi
        6: "S", // Samedi
        7: "D", // Dimanche
    };
    return dayMap[day] || ""; // Retourne une chaîne vide si le jour n'est pas valide
};

export default convertDayToLetter;
