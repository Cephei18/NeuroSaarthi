import React, { useState } from "react";
import { auth, db } from "../firebase"; // Import Firestore
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setDoc, doc } from "firebase/firestore"; // Firestore functions
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [condition, setCondition] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Store additional details in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name,
        age,
        gender,
        condition,
        email
      });

      navigate("/dashboard"); // Redirect to dashboard
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  return (
    <div className="Signup-page">
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSignup}>
        <input type="text" placeholder="Full Name" onChange={(e) => setName(e.target.value)} required />
        <input type="number" placeholder="Age" onChange={(e) => setAge(e.target.value)} required />
        
        {/* Gender Selection */}
        <select onChange={(e) => setGender(e.target.value)} required>
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Other">Other</option>
        </select>

        {/* Neurodiverse Condition Selection */}
        <select onChange={(e) => setCondition(e.target.value)} required>
          <option value="">Select Neurodiverse Condition</option>
          <option value="Dyslexia">Dyslexia</option>
          <option value="ADHD">ADHD</option>
          <option value="Autism">Autism</option>
        </select>

        <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
        
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
