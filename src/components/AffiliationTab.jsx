import React from "react";
import { useNavigate } from "react-router-dom";
import "./AffiliationTab.css";

const AffiliationTab = () => {
  const navigate = useNavigate();

  return (
    <div className="affiliation-container">
      <div className="affiliation-tab">
        <h1 className="affiliation-title">🎓 Neurodiverse Affiliation Program</h1>

        {/* SECTION 1: Purpose */}
        <section className="affiliation-section">
          <h2>📢 Why This Program?</h2>
          <p>
            This program certifies schools/colleges that actively support neurodiverse learners — including those with Dyslexia (SLD) and ADHD — by following official guidelines, offering accommodations, and promoting inclusive education.
          </p>
        </section>

        {/* SECTION 2: Eligibility Checklist */}
        <section className="affiliation-section">
          <h2>✅ Minimum Requirements for Affiliation</h2>
          <ol>
            <li>
              <strong>Screening Policy:</strong> Institution must perform early screening for SLD/ADHD by <u>Grade 3</u>.
            </li>
            <li>
              <strong>Diagnosis Compliance:</strong> Accepts assessments based on:
              <ul>
                <li>DSM-5 / ICD-11 criteria</li>
                <li>NIMHANS SLD Battery (India-approved)</li>
                <li>Conners or Vanderbilt checklists for ADHD</li>
              </ul>
            </li>
            <li>
              <strong>Accommodations Offered (Any 3+ Required):</strong>
              <ul>
                <li>Extra exam time</li>
                <li>Scribe or Reader</li>
                <li>Calculator or digital tools</li>
                <li>Second language exemption</li>
                <li>Special educator support</li>
              </ul>
            </li>
            <li>
              <strong>Inclusive Infrastructure:</strong> Institution must provide a sensory-friendly space or quiet zone.
            </li>
            <li>
              <strong>Disability Certificate Support:</strong> Assist students in getting official certificates via govt hospitals or certified centers.
            </li>
            <li>
              <strong>Teacher Training:</strong> At least 1 teacher must be trained in learning disabilities & inclusive practices.
            </li>
            <li>
              <strong>Awareness Events:</strong> Must conduct at least one neurodiversity awareness program per academic year.
            </li>
          </ol>
        </section>

        {/* SECTION 3: RPwD Legal Backing */}
        <section className="affiliation-section">
          <h2>📚 Legal Framework (India)</h2>
          <p>
            The RPwD Act (2016) recognizes Specific Learning Disability and mandates inclusive education support in all schools.
            Accommodations must be aligned with CBSE, ICSE, or State Board norms.
          </p>
        </section>

        {/* SECTION 4: Apply CTA */}
        <section className="affiliation-section apply-box">
          <h2>🎯 Ready to Get Affiliated?</h2>
          <p>
            Fill out the Affiliation Request Form, submit necessary proofs (photos, policies, training certificates), and request a virtual inspection. Qualified institutions will be featured on our live affiliation map.
          </p>
          <button className="apply-btn" onClick={() => navigate("/get-affiliation")}>
            Request Affiliation
          </button>
        </section>

        {/* SECTION 5: Map Placeholder */}
        <section className="affiliation-section">
          <h2>📍 Find Affiliated Institutions Near You</h2>
          <div className="map-placeholder">[ Google Maps Integration Coming Soon ]</div>
        </section>
      </div>
    </div>
  );
};

export default AffiliationTab;
