import React from "react";
import "../App.css";  // Importing CSS for styling

const Dashboard = () => {
  const user = { name: "Alex" }; // Replace this with actual user data later

  return (
    <div className="dashboard-container">
      {/* User Greeting */}
      <h2 className="dashboard-header">Welcome back, {user.name}! 👋</h2>

      {/* Progress Tracker */}
      <div className="progress-section">
        <h3>Your Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "40%" }}></div>
        </div>
        <p>40% Completed</p>
      </div>

      {/* Saved Content */}
      <div className="saved-content">
        <h3>Saved Resources</h3>
        <ul>
          <li>Understanding ADHD – Video</li>
          <li>Inclusive Teaching Strategies – Article</li>
          <li>Neurodiverse-Friendly Workplaces – Guide</li>
        </ul>
      </div>

      {/* AI-Powered Recommendations */}
      <div className="recommendations">
        <h3>Recommended for You</h3>
        <p>🔹 Try the Dyslexia Simulation Today!</p>
        <p>🔹 Join a Neurodiversity-Friendly Parenting Workshop.</p>
      </div>

      {/* Achievements & Badges */}
      <div className="achievements">
        <h3>Your Achievements</h3>
        <div className="badges">
          <span className="badge">🌟 Beginner</span>
          <span className="badge">🏆 Neurodiversity Advocate</span>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
