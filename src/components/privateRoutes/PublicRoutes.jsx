import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

function PublicRoute({ children }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return isAuthenticated || localStorage.token ? (
    <Navigate replace to='/app/dashboard' />
  ) : (
    children
  );
}

export default PublicRoute;
