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
