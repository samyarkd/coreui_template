import "@coreui/coreui/dist/css/coreui.rtl.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import NotFoundPage from "./components/pages/404/404";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/Register/Register";
import RoutesState from "./context/Routes/RoutesState";
import SidebarState from "./context/Sidebar/SidebarState";

ReactDOM.render(
  <React.StrictMode>
    <SidebarState>
      <RoutesState>
        <BrowserRouter>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/app/*' element={<App />} />
            <Route path='*' element={<NotFoundPage />} />
            <Route path='/' element={<Login />} />
          </Routes>
        </BrowserRouter>
      </RoutesState>
    </SidebarState>
  </React.StrictMode>,
  document.getElementById("root")
);
