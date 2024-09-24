import React, { useState, useEffect } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';
import { getFeedback } from './api/feedbackApi';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
      loadFeedback();
  }, []);

  const loadFeedback = async () => {
    const feedbackData = await getFeedback();
    setFeedbacks(feedbackData);
  }

  return (
    <div>
      <h1>Feedback App</h1>
      <FeedbackForm />
      <FeedbackList feedbacks={feedbacks}/>
    </div>
  );
}

export default App;
