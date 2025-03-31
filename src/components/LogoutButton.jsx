// import React from "react";
// import { auth } from "../firebase";
// import { signOut } from "firebase/auth";
// import { useNavigate } from "react-router-dom";

// const LogoutButton = () => {
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       await signOut(auth);
//       alert("Logout successful!");
//       navigate("/login"); // Redirect to login page after logout
//     } catch (error) {
//       alert(error.message);
//     }
//   };

//   return <button onClick={handleLogout}>Logout</button>;
// };

// export default LogoutButton;
