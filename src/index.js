import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import RoutesState from "./context/Routes/RoutesState";
import SidebarState from "./context/Sidebar/SidebarState";
ReactDOM.render(
  <React.StrictMode>
    <SidebarState>
      <RoutesState>
        <BrowserRouter>
          <Routes>
            <Route path='*' element={<App />}></Route>
          </Routes>
        </BrowserRouter>
      </RoutesState>
    </SidebarState>
  </React.StrictMode>,
  document.getElementById("root")
);
