import React, { useEffect } from "react";
import activityData from "../../assets/data/activity.json";
import Hello from "./Hello";
import DataHandler from "../../utils/DataHandler";
import WeeklyActivity from "./WeeklyActivity";

/**
 * Home component that renders the homepage content.
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
    useEffect(() => {
        // 1. Tester l'API
        const apiDataHandler = new DataHandler(
            "http://localhost:3000",
            "/user/12/activity"
        );
        apiDataHandler
            .fetchData()
            .then((data) => {
                // const nv = data;
                return data;
            })
            .catch((err) => {
                console.error(
                    "Erreur lors de la récupération des données API :",
                    err
                );
            });
        console.log("apiDataHandler", apiDataHandler.data);
        /*
        const mockDataHandler = new DataHandler(null, null, true, activityData);
        mockDataHandler
            .fetchData()
            .then((data) => {
                // console.log(
                //     "Données récupérées depuis les données moquées :",
                //     data
                // );
                return data;
            })
            .catch((err) => {
                console.error(
                    "Erreur lors de la récupération des données moquées :",
                    err
                );
            });
        console.log("mockDataHandler", mockDataHandler.data);
        */
    }, []);

    return (
        <main>
            <Hello />
            <div className="dashboard-overview">
                <div className="activity-summary">
                    <section className="weekly_activity">
                        <WeeklyActivity />
                    </section>
                    <section className="weekly_resume-activity"></section>
                </div>
                <section className="daily_consumption"></section>
            </div>
        </main>
    );
};

export default Home;
