import React, { useState } from 'react';
import { createFeedback } from '../api/feedbackApi';

/**
 * FeedbackForm component allows users to submit new feedback.
 * It consists of a form with inputs for the feedback title and text, 
 * and handles form submission to create a new feedback entry.
 *
 * @component
 * @param {function} onFeedbackAdded - Callback function to be called after a feedback is successfully added.
 * 
 * @example
 * <FeedbackForm onFeedbackAdded={loadFeedback}/>
 */
const FeedbackForm = ({ onFeedbackAdded }) => {
    // State variables to store feedback title and text
    const [title, setTitle] = useState('');
    const [text, setText] = useState(''); 

    /**
     * Handles form submission to create a new feedback entry.
     * Prevents default form submission behavior, sends data to the backend via `createFeedback`, 
     * and triggers the `onFeedbackAdded` callback after successful creation.
     * 
     * @async
     * @function
     * @param {Event} e - Form submission event.
     */
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createFeedback({ title, text });
        setTitle(''); // Clear the title input field
        setText('');  // Clear the text input field
        onFeedbackAdded(); // Trigger callback to refresh feedback list
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add New Feedback</h2>
            {/* Input for feedback title */}
            <input
                type="text"
                placeholder="Add Feedback Title Here"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <br/>
            {/* Textarea for feedback text */}
            <textarea 
                placeholder="Add Feedback Text Here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                required
            />
            <br/>
            {/* Submit button for the form */}
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
