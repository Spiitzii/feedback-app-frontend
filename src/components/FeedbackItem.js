import React from "react";
import { deleteFeedback } from "../api/feedbackApi";

/**
 * FeedbackItem component displays a single feedback entry.
 * It shows the feedback title and text, and provides a delete button 
 * to remove the feedback from the list.
 *
 * @component
 * @param {Object} feedback - The feedback object containing `title` and `text` properties.
 * @param {function} onDeleted - Callback function to be called after a feedback is successfully deleted.
 * 
 * @example
 * const sampleFeedback = { title: "Feedback 1", text: "This is a sample feedback." };
 * <FeedbackItem feedback={sampleFeedback} onDeleted={handleFeedbackDeleted} />
 */
const FeedbackItem = ({ feedback, onDeleted }) => {

    /**
     * Handles the deletion of the current feedback.
     * Calls the `deleteFeedback` function to remove the feedback based on its title, 
     * and triggers the `onDeleted` callback to update the parent component's state.
     * 
     * @async
     * @function
     */
    const handleDelete = async () => {
        await deleteFeedback(feedback.title);
        onDeleted(); // Trigger callback after deletion
    }

    return (
        <div className="feedback-item">
            <h3>{feedback.title}</h3>
            <p>{feedback.text}</p>
            {/* Button to delete the feedback */}
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default FeedbackItem;
