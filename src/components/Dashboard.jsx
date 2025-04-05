import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";  // ✅ Import useNavigate
import "../App.css";
import { auth, db } from "../Firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [welcomeText, setWelcomeText] = useState("");
  const navigate = useNavigate(); // ✅ Initialize navigate

  useEffect(() => {
    const fetchUserData = async () => {
      if (auth.currentUser) {
        const userDoc = await getDoc(doc(db, "users", auth.currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, []);

  // Typing Animation Effect
  useEffect(() => {
    if (userData) {
      const fullText = `Welcome, ${userData.name || "User"}!`;
      let i = 0;
      setWelcomeText(""); // Reset before animation
      const interval = setInterval(() => {
        if (i < fullText.length) {
          setWelcomeText(fullText.substring(0, i + 1));
          i++;
        } else {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [userData]);

  return (
    <div className="dashboard-container">
      {/* Welcome Message */}
      <h1 className="typing-effect">{welcomeText}</h1>

      {/* Profile Section */}
      <div className="profile-card">
      <img src="/src/assets/default-profile.jpg" alt="Profile" className="profile-pic" />
        <div className="profile-details">
          <h2>{userData?.name || "User"}</h2>
          <p><strong>Age:</strong> {userData?.age || "N/A"}</p>
          <p><strong>Gender:</strong> {userData?.gender || "N/A"}</p>
          <p><strong>Condition:</strong> {userData?.condition || "N/A"}</p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="dashboard-sections">
      <div className="dashboard-card">
         <h3>💬 AI Chatbot</h3>
         <p>Ask questions, get support, and explore neurodiversity with our AI guide.</p>
         <button className="open-chatbotab-btn" onClick={() => navigate("/chatbot-tab")}>
            Chat with Us
          </button>
      </div>

        <div className="dashboard-card">
          <h3>📊 Personalized Reports</h3>
          <p>View AI-generated insights based on your experience.</p>
          <button className="open-report-btn" onClick={() => navigate("/reports")}>
            View Report
          </button>
        </div>
        <div className="dashboard-card">
          <h3>🎯 Exercise Sessions</h3>
          <p>Daily interactive exercises tailored for you.</p>
          <button onClick={() => navigate("/exercise")} className="dashboard-btn">
        Start Exercise
      </button>
        </div>
        <div className="dashboard-card">
          <h3>📝 Share Your Journey</h3>
          <p>Share your experiences and read inspiring stories.</p>
          <button className="open-journey-btn" onClick={() => navigate("/share-journey")}>
              Share Now
           </button>
        </div>
        
      <div className="dashboard-card">
        <h3>📖 Read Shared Journeys</h3>
        <p>Explore experiences shared by others in the community.</p>
        <button className="open-journey-btn" onClick={() => navigate("/read-journeys")}>
          Read Journeys
        </button>
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
