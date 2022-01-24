import "@coreui/coreui/dist/css/coreui.rtl.css";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthState from "./context/auth/AuthState";
import RoutesState from "./context/Routes/RoutesState";
import SidebarState from "./context/Sidebar/SidebarState";

ReactDOM.render(
  <React.StrictMode>
    <AuthState>
      <SidebarState>
        <RoutesState>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </RoutesState>
      </SidebarState>
    </AuthState>
  </React.StrictMode>,
  document.getElementById("root")
);
