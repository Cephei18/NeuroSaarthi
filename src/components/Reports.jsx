import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAIResponse } from "../utils/geminiAPI";
import ReactMarkdown from "react-markdown";
import "./Report.css";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

import { db } from "../Firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Reports = () => {
  const navigate = useNavigate();
  const [aiResponse, setAiResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [reportHistory, setReportHistory] = useState([]);
  const [chartData, setChartData] = useState([]);
  const [showOptions, setShowOptions] = useState(true); // <-- controls button display
  const [selectedTimestamp, setSelectedTimestamp] = useState("");

  const handleGenerateReport = async () => {
    setLoading(true);
    setMessage("🔄 Fetching your chat history...");

    try {
      const chatLogRef = collection(db, "chatLogs");
      const snapshot = await getDocs(chatLogRef);

      let userMessages = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        if (data.sender === "user" && data.message) {
          userMessages.push(data.message);
        }
      });

      if (userMessages.length === 0) {
        setMessage("⚠️ No user messages found to generate a report.");
        setLoading(false);
        return;
      }

      const wordCounts = {};
      userMessages
        .join(" ")
        .toLowerCase()
        .replace(/[^a-z\s]/g, "")
        .split(/\s+/)
        .forEach((word) => {
          if (word.length > 3) {
            wordCounts[word] = (wordCounts[word] || 0) + 1;
          }
        });

      const sortedWords = Object.entries(wordCounts)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([word, count]) => ({ word, count }));
      setChartData(sortedWords);

      setMessage("🧠 Generating personalized insights using AI...");

      const prompt = `These are messages from a user in a neurodiversity support chatbot:\n\n${userMessages
        .map((msg) => `- ${msg}`)
        .join("\n")}\n\nBased on this, generate a supportive and insightful report tailored to the user's needs.`;

      const response = await getAIResponse(prompt);

      if (!response || response.trim() === "") {
        setMessage("⚠️ AI could not generate a response. Try again.");
      } else {
        setAiResponse(response);
        setMessage("✅ Report generated successfully!");
        setShowOptions(false);

        const user = getAuth().currentUser;
        if (user) {
          const reportsCollectionRef = collection(
            db,
            "users",
            user.uid,
            "reports"
          );
          await addDoc(reportsCollectionRef, {
            content: response,
            timestamp: serverTimestamp(),
          });
          fetchReportHistory(user.uid);
        }
      }
    } catch (err) {
      console.error("❌ Error generating report:", err);
      setMessage("❌ Error occurred while fetching logs or generating report.");
    }

    setLoading(false);
  };

  const fetchReportHistory = async (uid) => {
    try {
      const reportsRef = collection(db, "users", uid, "reports");
      const q = query(reportsRef, orderBy("timestamp", "desc"));
      const snapshot = await getDocs(q);
      const history = snapshot.docs.map((doc) => doc.data());
      setReportHistory(history);
    } catch (err) {
      console.error("❌ Error fetching report history:", err);
    }
  };

  useEffect(() => {
    const user = getAuth().currentUser;
    if (user) {
      fetchReportHistory(user.uid);
    }
  }, []);

  const handleViewOldReport = () => {
    if (reportHistory.length > 0) {
      const latest = reportHistory[0];
      setAiResponse(latest.content);
      setSelectedTimestamp(
        latest.timestamp?.seconds
          ? new Date(latest.timestamp.seconds * 1000).toLocaleString()
          : "Unknown time"
      );
      setShowOptions(false);
      setChartData([]); // no chart for old
      setMessage(`📂 Viewing your latest saved report`);
    }
  };

  return (
    <div className="report-section">
      <div className="report-container">
        <h2>Your Personalized Reports</h2>
        <p className="subtitle">AI-generated insights based on your activities.</p>

        {showOptions ? (
          <>
            <div className="button-group">
              <button
                className="report-btn"
                onClick={handleGenerateReport}
                disabled={loading}
              >
                📄 Generate New Report
              </button>

              {reportHistory.length > 0 && (
                <button
                  className="report-btn secondary-btn"
                  onClick={handleViewOldReport}
                >
                  📂 View Previous Report
                </button>
              )}
            </div>
            {loading && <p className="loading-text">Please wait...</p>}
            {message && <p className="status-text">{message}</p>}
          </>
        ) : (
          <div className="report-box">
            <div className="report-markdown">
              <ReactMarkdown>{aiResponse}</ReactMarkdown>
            </div>

            {chartData.length > 0 && (
              <>
                <h3 className="chart-heading">🔤 Frequently Used Words</h3>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="word" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="count" fill="#4F46E5" />
                  </BarChart>
                </ResponsiveContainer>
              </>
            )}

            {message && <p className="status-text">{message}</p>}

            <div className="button-group">
              <button
                className="report-btn"
                onClick={() => {
                  setShowOptions(true);
                  setAiResponse("");
                  setChartData([]);
                  setMessage("");
                }}
              >
                🔄 Back to Report Options
              </button>
            </div>
          </div>
        )}

        {reportHistory.length > 1 && !showOptions && (
          <div className="report-history">
            <h3>🕓 Older Reports</h3>
            <ul>
              {reportHistory.slice(1).map((rep, index) => (
                <li key={index}>
                  <button
                    className="history-button"
                    onClick={() => {
                      setAiResponse(rep.content);
                      setSelectedTimestamp(
                        rep.timestamp?.seconds
                          ? new Date(rep.timestamp.seconds * 1000).toLocaleString()
                          : "Unknown time"
                      );
                      setMessage(`📄 Viewing report from ${selectedTimestamp}`);
                      setChartData([]);
                    }}
                  >
                    Report -{" "}
                    {rep.timestamp?.seconds
                      ? new Date(rep.timestamp.seconds * 1000).toLocaleString()
                      : "Unknown time"}
                  </button>
                </li>
              ))}
            </ul>
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
