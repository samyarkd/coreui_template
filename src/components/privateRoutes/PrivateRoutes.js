import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../../context/auth/AuthContext";

function PrivateRoute({ children }) {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  return isAuthenticated || localStorage.token ? (
    children
  ) : (
    <Navigate replace to='/login' />
  );
}

export default PrivateRoute;
