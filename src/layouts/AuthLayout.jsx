import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const AuthLayout = () => {
  const isAuth = true;
  if (isAuth) {
    return <Navigate to="/" replace />;
  }
  return <Outlet />;
};

export default AuthLayout;
