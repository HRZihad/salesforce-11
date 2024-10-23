import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedLayout = ({ children }) => {
  const isAuth = true;
  if (!isAuth) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default ProtectedLayout;
