import { useNavigate } from "react-router-dom";

const Reports = () => {
  const navigate = useNavigate();

  return (
    <div className="report-container">
      <h2>Your Personalized Reports</h2>
      <p>Here you will see AI-generated insights based on your activities.</p>
      <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
    </div>
  );
};

export default Reports;
