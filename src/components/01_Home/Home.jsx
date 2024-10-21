import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../utils/UserContext";
import Hello from "./Hello";
import WeeklyActivityCharts from "./Activity/WeeklyActivityCharts";
import ResumeActivity from "./Resume_Activity/ResumeActivity";
import SectionConsumption from "./Consumption/SectionConsumption";
import PropTypes from "prop-types";

/**
 * Home component that renders the homepage content.
 * It retrieves the user ID from the URL params and updates the user context.
 * @component
 * @returns {JSX.Element} The rendered Home component
 */
const Home = () => {
    const { setUserId } = useContext(UserContext); // Accessing userId and setUserId from UserContext
    const { id } = useParams(); // Extracting the ID from the URL

    useEffect(() => {
        if (id) {
            setUserId(parseInt(id)); // Updates the user ID in the context if an ID is provided in the URL
        }
    }, [id, setUserId]);

    return (
        <main>
            <section className="section-hello">
                <Hello /> {/* Greeting section */}
            </section>
            <div className="dashboard-overview">
                <div className="activity-summary">
                    <section className="weekly_activity">
                        <WeeklyActivityCharts />{" "}
                        {/* Weekly activity chart section */}
                    </section>
                    <section className="weekly_resume-activity">
                        <ResumeActivity /> {/* Summary of weekly activity */}
                    </section>
                </div>
                <section className="daily_consumption">
                    <SectionConsumption /> {/* Daily consumption data */}
                </section>
            </div>
        </main>
    );
};

// Define PropTypes for Home (if any props were passed)
Home.propTypes = {
    userId: PropTypes.number, // The user ID should be a number
    setUserId: PropTypes.func, // setUserId is a required function to update the user ID
};

export default Home;
