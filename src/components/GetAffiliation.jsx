import React, { useState } from "react";
import "./GetAffiliation.css";

// ✅ Firestore Import
import { db } from "../Firebase"; // 🔁 make sure the path is correct
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const GetAffiliation = () => {
  const [formData, setFormData] = useState({
    institutionName: "",
    type: "",
    location: "",
    contactPerson: "",
    email: "",
    phone: "",
    guidelinesFollowed: [],
    proofLinks: "",
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      const updatedList = checked
        ? [...formData.guidelinesFollowed, value]
        : formData.guidelinesFollowed.filter((item) => item !== value);
      setFormData({ ...formData, guidelinesFollowed: updatedList });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // ✅ Submit to Firestore
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, "affiliationRequests"), {
        ...formData,
        submittedAt: serverTimestamp(),
      });

      alert("✅ Affiliation request submitted successfully!");

      // Reset the form
      setFormData({
        institutionName: "",
        type: "",
        location: "",
        contactPerson: "",
        email: "",
        phone: "",
        guidelinesFollowed: [],
        proofLinks: "",
      });
    } catch (error) {
      console.error("❌ Submission Error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="get-affiliation-section">
      <div className="get-affiliation-form-container">
        <h2>🏫 Apply for Neurodiverse Affiliation</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="institutionName"
            placeholder="Institution Name"
            required
            value={formData.institutionName}
            onChange={handleChange}
          />
          <select name="type" required value={formData.type} onChange={handleChange}>
            <option value="">Institution Type</option>
            <option value="School">School</option>
            <option value="College">College</option>
          </select>
          <input
            type="text"
            name="location"
            placeholder="City / State"
            required
            value={formData.location}
            onChange={handleChange}
          />
          <input
            type="text"
            name="contactPerson"
            placeholder="Contact Person"
            required
            value={formData.contactPerson}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            value={formData.email}
            onChange={handleChange}
          />
          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            required
            value={formData.phone}
            onChange={handleChange}
          />

          <label className="proof-label">🔗 Upload Proof (Google Drive or image links)</label>
          <input
            type="text"
            name="proofLinks"
            placeholder="Paste proof link(s) here"
            value={formData.proofLinks}
            onChange={handleChange}
          />

          <label className="checklist-label">✅ Check the guidelines you already follow:</label>
          <div className="checklist">
            <label>
              <input
                type="checkbox"
                value="Early Screening by Grade 3"
                onChange={handleChange}
                checked={formData.guidelinesFollowed.includes("Early Screening by Grade 3")}
              />
              Early Screening by Grade 3
            </label>
            <label>
              <input
                type="checkbox"
                value="Use of NIMHANS/DSM-5 assessments"
                onChange={handleChange}
                checked={formData.guidelinesFollowed.includes("Use of NIMHANS/DSM-5 assessments")}
              />
              Use of NIMHANS/DSM-5 assessments
            </label>
            <label>
              <input
                type="checkbox"
                value="Extra exam time or scribe"
                onChange={handleChange}
                checked={formData.guidelinesFollowed.includes("Extra exam time or scribe")}
              />
              Exam Accommodations (extra time, scribe, etc.)
            </label>
            <label>
              <input
                type="checkbox"
                value="Sensory-friendly zone available"
                onChange={handleChange}
                checked={formData.guidelinesFollowed.includes("Sensory-friendly zone available")}
              />
              Sensory-Friendly Space on Campus
            </label>
            <label>
              <input
                type="checkbox"
                value="Inclusive education staff trained"
                onChange={handleChange}
                checked={formData.guidelinesFollowed.includes("Inclusive education staff trained")}
              />
              Teacher(s) Trained in Inclusive Education
            </label>
          </div>

          <button type="submit" className="submit-btn">Submit Application</button>
        </form>
      </div>
    </div>
  );
};

export default GetAffiliation;
