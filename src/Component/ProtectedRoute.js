import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("token"); // ya aapka auth state

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />; // login page pe redirect
  }

  return children;
};

export default ProtectedRoute;
