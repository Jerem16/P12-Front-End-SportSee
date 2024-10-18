/**
 * Extracts the activities data from the API response.
 *
 * @function
 * @param {Object} apiData - The API response object that contains activities data.
 * @returns {Array|undefined} The activities array from the API response, or undefined if not available.
 */
export const fetchActivities = (apiData) => {
    return apiData?.data?.activities;
};

/**
 * Extracts the today's score from the API response.
 *
 * @function
 * @param {Object} apiData - The API response object that contains the score data.
 * @returns {number|undefined} The today's score from the API response, or undefined if not available.
 */
export const todayScore = (apiData) => {
    return apiData?.data?.todayScore;
};
