/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/auth/AuthContext";
import AppContent from "../AppContent/AppContent";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";

function AppLayout() {
  const { isAuthenticated, loadUser } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.token) {
      loadUser();
    } else {
      navigate("/login");
    }
  }, [isAuthenticated]);

  return (
    <div className='flex flex-row-reverse items-start justify-start '>
      <Sidebar />
      <div className='flex flex-col justify-between bg-neutral-200 w-full'>
        <div>
          <Header />
          <AppContent />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default AppLayout;
