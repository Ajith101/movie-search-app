import React from "react";
import { useAuth } from "./context/AuthContext";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

export const ProtectesRoutForLogin = () => {
  const { auth } = useAuth();
  if (auth) {
    return <Navigate to="/" />;
  }
  return <Outlet />;
};

const ProtectedRoutes = () => {
  const { auth } = useAuth();
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
