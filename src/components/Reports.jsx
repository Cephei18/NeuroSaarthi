
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import demoLog from "../data/demoLog";
import { getAIResponse } from "../utils/geminiAPI";
import ReactMarkdown from "react-markdown";
import "./Report.css"; // We'll add simple styling here

const Reports = () => {
  const navigate = useNavigate();
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchReport() {
      setLoading(true);
      const response = await getAIResponse(demoLog);
      setAiResponse(response || "");
      setLoading(false);
    }

    fetchReport();
  }, []);

  return (
    <div className="report-container">
      <h2>Your Personalized Reports</h2>
      <p className="subtitle">AI-generated insights based on your activities.</p>

      {loading ? (
        <p>Loading AI insights...</p>
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
  );
};

export default Reports;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import demoLog from "../data/demoLog"; // Importing user log
// import { getAIResponse } from "../utils/geminiAPI"; // Importing API function

// const Reports = () => {
//   const navigate = useNavigate();
//   const [aiResponse, setAiResponse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchReport() {
//       setLoading(true);
//       const response = await getAIResponse(demoLog);
//       setAiResponse(response);
//       setLoading(false);
//     }

//     fetchReport();
//   }, []);

//   return (
//     <div className="report-container">
//       <h2>Your Personalized Reports</h2>
//       <p>Here you will see AI-generated insights based on your activities.</p>

//       {loading ? (
//         <p>Loading AI insights...</p>
//       ) : (
//         <pre>{aiResponse ? JSON.stringify(aiResponse, null, 2) : "No data available"}</pre>
//       )}

//       <button onClick={() => navigate("/dashboard")}>Back to Dashboard</button>
//     </div>
//   );
// };

// export default Reports;

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import demoLog from "../data/demoLog";
// import { getAIResponse } from "../utils/geminiAPI";
// import "./Report.css"; // Import custom styles

// const Reports = () => {
//   const navigate = useNavigate();
//   const [aiResponse, setAiResponse] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchReport() {
//       setLoading(true);
//       const response = await getAIResponse(demoLog);
//       setAiResponse(response);
//       setLoading(false);
//     }

//     fetchReport();
//   }, []);

//   const renderSection = (title, content) => (
//     <div className="report-section">
//       <h3>{title}</h3>
//       <div className="section-content">
//         {Array.isArray(content) ? (
//           <ul>
//             {content.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         ) : (
//           <p>{content}</p>
//         )}
//       </div>
//     </div>
//   );

//   return (
//     <div className="report-container">
//       <h2 className="report-title">📊 Your Personalized AI Report</h2>
//       <p className="report-subtitle">
//         Get AI-generated insights based on your interactions and logs.
//       </p>

//       {loading ? (
//         <p className="loading-text">Loading AI insights...</p>
//       ) : aiResponse ? (
//         <div className="report-card">
//           {renderSection("🔍 Overall Summary", aiResponse.overallSummary)}
//           {renderSection("👤 User", aiResponse.user)}
//           {renderSection("🕒 Timestamp", aiResponse.timestamp)}
//           {renderSection("💬 Messages", aiResponse.messages)}
//           {renderSection("📌 Inferences", aiResponse.inferences)}
//           {renderSection("✅ Suggested Actions", aiResponse.potentialActions)}
//           {renderSection("⚠️ Limitations", aiResponse.limitations)}
//           {renderSection("📝 Conclusion", aiResponse.conclusion)}
//         </div>
//       ) : (
//         <p>No AI insights available.</p>
//       )}

//       <button className="back-button" onClick={() => navigate("/dashboard")}>
//         ⬅ Back to Dashboard
//       </button>
//     </div>
//   );
// };

// export default Reports;
