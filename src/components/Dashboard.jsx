import React, { useState, useEffect } from "react";
import { auth, db } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const Dashboard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      }
    };
    fetchUserData();
  }, []);

  return (
    <div className="dashboard-container">
      {userData ? (
        <h2>Welcome, {userData.name}!</h2> 
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
};

export default Dashboard;
