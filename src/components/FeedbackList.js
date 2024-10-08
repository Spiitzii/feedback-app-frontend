import React from "react";
import FeedbackItem from "./FeedbackItem";

/**
 * FeedbackList component displays a list of feedback entries.
 * It renders each feedback item using the FeedbackItem component 
 * and handles the display of a message when no feedback is available.
 *
 * @component
 * @param {Array} feedbacks - An array of feedback objects to be displayed.
 * @param {function} onFeedbackDeleted - Callback function to be called when a feedback item is deleted.
 * 
 * @example
 * const sampleFeedbacks = [{ id: 1, title: "Feedback 1", text: "This is feedback." }];
 * <FeedbackList feedbacks={sampleFeedbacks} onFeedbackDeleted={handleFeedbackDeleted} />
 */
const FeedbackList = ({ feedbacks, onFeedbackDeleted }) => {

    return (
        <div>
            <h2>Feedback</h2>
            {feedbacks.length === 0 ? (
                <p>No feedback available.</p> // Message displayed when there are no feedbacks
            ) : (
                feedbacks.map((feedback) => (
                    <FeedbackItem 
                        key={feedback.id} // Unique key for each feedback item
                        feedback={feedback}
                        onDeleted={onFeedbackDeleted} // Pass callback for handling deletion
                    />
                ))
            )}
        </div>
    )
}

export default FeedbackList;
