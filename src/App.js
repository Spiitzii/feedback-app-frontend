import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { getFeedback } from './api/feedbackApi';
import './styles/App.css';

/**
 * Main App component for the Feedback Application.
 * This component is responsible for rendering the overall layout, 
 * loading feedback data from the API, and passing data to child components.
 *
 * @component
 */
function App() {
  // State to store the list of feedbacks
  const [feedbacks, setFeedbacks] = useState([]);

  /**
   * useEffect hook to load the feedback data once the component is mounted.
   * It triggers the loadFeedback function to fetch and set feedbacks.
   */
  useEffect(() => {
      loadFeedback();
  }, []);

  /**
   * Loads feedback data from the backend API using the getFeedback function.
   * Updates the feedback state with the retrieved data.
   * 
   * @async
   * @function
   */
  const loadFeedback = async () => {
    const feedbackData = await getFeedback();
    setFeedbacks(feedbackData);
  }

  return (
    <div className='container'>
      <h1>Feedback App</h1>
      {/* FeedbackForm component handles new feedback submissions */}
      <FeedbackForm onFeedbackAdded={loadFeedback}/>
      
      {/* FeedbackList component displays the list of existing feedbacks */}
      <FeedbackList feedbacks={feedbacks} onFeedbackDeleted={loadFeedback}/>
    </div>
  );
}

export default App;
