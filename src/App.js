/* eslint-disable react-hooks/exhaustive-deps */
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import AppLayout from "./components/layout/app/AppLayout";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/Register/Register";
import PrivateRoute from "./components/privateRoutes/PrivateRoutes";
import PublicRoute from "./components/privateRoutes/PublicRoutes";
function App() {
  return (
    <Routes>
      <Route
        path='/app/*'
        element={
          <PrivateRoute>
            <AppLayout />
          </PrivateRoute>
        }
      />
      <Route
        path='/login'
        element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }
      />
      <Route
        path='/register'
        element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }
      />
      <Route path='*' element={<Navigate to='/login' />} />
      <Route path='/' element={<Navigate to='/login' />} />
    </Routes>
  );
}

export default App;
