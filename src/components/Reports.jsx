import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import demoLog from "../data/demoLog";
import { getAIResponse } from "../utils/geminiAPI";
import ReactMarkdown from "react-markdown";
import "./Report.css";

const Reports = () => {
  const navigate = useNavigate();
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [reportGenerated, setReportGenerated] = useState(false);

  const handleGenerateReport = async () => {
    setLoading(true);
    const response = await getAIResponse(demoLog);
    setAiResponse(response || "No data available.");
    setLoading(false);
    setReportGenerated(true);
  };

  return (
    <div className="report-section">
      <div className="report-container">
        <h2>Your Personalized Reports</h2>
        <p className="subtitle">AI-generated insights based on your activities.</p>

        {!reportGenerated ? (
          <button className="report-btn" onClick={handleGenerateReport}>
            📄 Generate Report
          </button>
        ) : loading ? (
          <p className="loading-text">Generating AI insights...</p>
        ) : (
          <div className="report-box">
            <div className="report-markdown">
              <ReactMarkdown>{aiResponse}</ReactMarkdown>
            </div>
          </div>
        )}

        <button className="back-button" onClick={() => navigate("/dashboard")}>
          ⬅ Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default Reports;
