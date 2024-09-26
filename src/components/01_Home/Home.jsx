import React, { useEffect } from "react";
import Hello from "./Hello";
import WeeklyActivity from "./Activity/WeeklyActivity";
import ResumeActivity from "./Resume_Activity/ResumeActivity";

/**
 * Home component that renders the homepage content.
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
    return (
        <main>
            <Hello />
            <div className="dashboard-overview">
                <div className="activity-summary">
                    <section className="weekly_activity">
                        <WeeklyActivity />
                    </section>
                    <section className="weekly_resume-activity">
                        <ResumeActivity />
                    </section>
                </div>
                <section className="daily_consumption"></section>
            </div>
        </main>
    );
};

export default Home;
