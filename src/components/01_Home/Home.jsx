import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import Hello from "./Hello";
import WeeklyActivityCharts from "./Activity/WeeklyActivityCharts";
import ResumeActivity from "./Resume_Activity/ResumeActivity";
import SectionConsumption from "./Consumption/SectionConsumption";

/**
 * Home component that renders the homepage content.
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
    const { userId, setUserId } = useContext(UserContext);
    const { id } = useParams(); // Récupère l'ID depuis l'URL

    useEffect(() => {
        if (id) {
            setUserId(parseInt(id)); // Met à jour l'ID utilisateur dans le contexte
        }
    }, [id, setUserId]);
    return (
        <main>
            <section className="section-hello">
                <Hello />{" "}
            </section>
            <div className="dashboard-overview">
                <div className="activity-summary">
                    <section className="weekly_activity">
                        <WeeklyActivityCharts />
                    </section>
                    <section className="weekly_resume-activity">
                        <ResumeActivity />
                    </section>
                </div>
                <section className="daily_consumption">
                    <SectionConsumption />
                </section>
            </div>
        </main>
    );
};

export default Home;
