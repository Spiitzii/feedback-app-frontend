import React from "react";
import { deleteFeedback } from "../api/feedbackApi";

const FeedbackItem = ({feedback}) => {
    
    const handleDelete = async () => {
        await deleteFeedback(feedback.title);
    }

    return(
        <div className="feedback-item">
            <h3>{feedback.title}</h3>
            <p>{feedback.text}</p>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default FeedbackItem;