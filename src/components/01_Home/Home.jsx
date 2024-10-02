import React, { useEffect } from "react";
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
