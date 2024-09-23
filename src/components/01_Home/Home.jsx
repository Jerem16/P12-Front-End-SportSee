import React from "react";
import PropTypes from "prop-types";
// import user from "../../assets/data/user.json";
import Hello from "./Hello";

import WeeklyActivity from "./WeeklyActivity";

// Assurez-vous que le chemin d'importation est correct

/**
 * Home component that renders the homepage content.
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
    // const firstName = user.data.userInfos.firstName; // Récupération du prénom

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
