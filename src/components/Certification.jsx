import React, { useState } from "react";
import jsPDF from "jspdf";
import "../App.css";

const Certification = () => {
  const [name, setName] = useState(""); // Store user's name

  // Generate PDF Certificate
  const generateCertificate = () => {
    if (!name.trim()) {
      alert("Please enter your name before downloading the certificate.");
      return;
    }

    const doc = new jsPDF();
    doc.setFont("helvetica", "bold");
    doc.setFontSize(24);
    doc.text("Enrollment Certificate", 60, 40);
    
    doc.setFontSize(18);
    doc.text(`This is to certify that`, 80, 70);
    
    doc.setFontSize(22);
    doc.text(name, 90, 90); // User's name
    
    doc.setFontSize(16);
    doc.text("has successfully enrolled in NeuroSaarthi Awareness Programe", 40, 110);
    
    doc.setFontSize(14);
    doc.text("Issued by: NeuroSaarthi", 80, 140);

    doc.save(`Neurodiversity_Certificate_${name}.pdf`);
  };

  return (
    <div className="certificate-page">
    <div className="certificate-container">
      <h2>Get Your Certificate</h2>
      <p>Enter your name and download a certificate for Kickstarting your journey with NeuroSaarthi </p>
      
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="certificate-input"
      />
      
      <button className="download-btn" onClick={generateCertificate}>
        Download Certificate
      </button>
    </div>
    </div>
  );
};

export default Certification;
