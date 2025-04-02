import React from "react";
import "../App.css"; // Ensure you link this CSS file

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
      {/* 🔹 Profile Section */}
      <div className="profile-card">
        <img src="https://as1.ftcdn.net/v2/jpg/05/60/26/08/1000_F_560260880_O1V3Qm2cNO5HWjN66mBh2NrlPHNHOUxW.jpg" alt="Profile" />
        <div className="profile-details">
          <h2>John Doe</h2>
          <p>Email: johndoe@example.com</p>
          <p>Member Since: 2025</p>
        </div>
      </div>

      {/* 🔹 Other Sections Below */}
      <div className="dashboard-sections">
        <div className="dashboard-card">
          <h3>Progress & Badges</h3>
          <p>Your journey so far...</p>
        </div>

        <div className="dashboard-card">
          <h3>AI-Powered Reports</h3>
          <p>Personalized insights & recommendations</p>
        </div>

        <div className="dashboard-card">
          <h3>Upload Your Journey</h3>
          <p>Share your experiences & stories</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
