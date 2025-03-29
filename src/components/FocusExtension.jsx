import React from "react";
import "../App.css"; // ✅ Uses the same theme as Dyslexia & Autism

const FocusExtension = () => {
  return (
    <div className="focus-extension-container">
      {/* 🔹 Header Section */}
      <h1 className="focus-header">Enhance Your Focus with NeuroSaarthi</h1>
      {/* <p className="focus-description">
        Our Chrome extension helps minimize distractions, making online work easier for neurodiverse individuals.  
      </p> */}

      {/* 🔹 Download Button */}
      <a 
        href="http://gopikachauhan.me/NeuroSaarthi/" 
        download
        className="focus-download-button"
      >
        Download Chrome Extension
      </a>

      {/* 🔹 Installation Guide */}
      <div className="focus-steps">
        <h2>Steps to Install</h2>
        <ol>
          <li>Download the ZIP file using the button above.</li>
          <li>Go to <b>chrome://extensions/</b> in your browser.</li>
          <li>Enable <b>Developer Mode</b> (top-right corner).</li>
          <li>Click <b>"Load unpacked"</b> and select the extracted folder.</li>
          <li>Enjoy a focused and distraction-free browsing experience!</li>
        </ol>
      </div>
    </div>
  );
};

export default FocusExtension;
