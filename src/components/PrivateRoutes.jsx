import React from "react";
import { useAuth } from "../utils/AuthContext";
import { Outlet, Navigate } from "react-router-dom";
const PrivateRoutes = () => {
  const { user } = useAuth();
  return <>{user ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoutes;
