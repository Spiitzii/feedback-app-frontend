import { BACKEND_URL } from '../config';

/**
 * Sends a POST request to create a new feedback entry in the backend.
 * 
 * @async
 * @function
 * @param {Object} feedback - The feedback object containing title and text.
 * @returns {Promise<Object>} The response data from the server after creating feedback.
 * 
 * @example
 * const newFeedback = { title: "Great app!", text: "I really enjoy using this." };
 * const createdFeedback = await createFeedback(newFeedback);
 */
export const createFeedback = async (feedback) => {
    const response = await fetch(BACKEND_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedback)
    });
    return response.json(); // Return the JSON response from the server
}

/**
 * Fetches the list of feedback entries from the backend.
 * 
 * @async
 * @function
 * @returns {Promise<Array>} An array of feedback objects retrieved from the server.
 * 
 * @example
 * const feedbacks = await getFeedback();
 */
export const getFeedback = async () => {
    const response = await fetch(BACKEND_URL);
    return response.json(); // Return the JSON response from the server
}

/**
 * Sends a DELETE request to remove a feedback entry by title from the backend.
 * 
 * @async
 * @function
 * @param {string} title - The title of the feedback to be deleted.
 * @returns {Promise<Object>} The response data from the server after deleting feedback.
 * 
 * @example
 * await deleteFeedback("Feedback Title");
 */
export const deleteFeedback = async (title) => {
    const response = await fetch(`${BACKEND_URL}/${title}`, {
        method: 'DELETE'
    });
    return response.json(); // Return the JSON response from the server
}
