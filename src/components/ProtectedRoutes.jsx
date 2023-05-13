import React from "react";
import { useAuth } from "./context/AuthContext";
import Login from "../pages/Login";
import { Search } from "./search/Search";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoutes = () => {
  //   const navigate = useNavigate();
  const { auth } = useAuth();
  if (!auth) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default ProtectedRoutes;
