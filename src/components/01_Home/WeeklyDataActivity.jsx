import React from "react";
import WeeklyActivity from "./WeeklyActivity";
import DataJsonToJs from "../../utils/DataJsonToJs";

import activityData from "../../assets/data/activity.json"; // Importe le fichier JSON

const WeeklyDataActivity = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const formattedData = activityData.data.activities.map((activity, index) => ({
            ...activity,
            day: index + 1,
        }));
        setData(formattedData);
    }, []);

    return <WeeklyActivity data={data} />; // Passe les données à ton composant
};

export default WeeklyDataActivity;