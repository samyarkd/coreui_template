import CIcon from "@coreui/icons-react";
import {
  CNavItem,
  CNavTitle,
  CSidebar,
  CSidebarBrand,
  CSidebarHeader,
  CSidebarNav,
} from "@coreui/react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RoutesContext from "./../../../context/Routes/RoutesContext";
import SidebarContext from "./../../../context/Sidebar/SidebarContext";

function Sidebar() {
  const { visible } = useContext(SidebarContext);
  const { routes } = useContext(RoutesContext);

  return (
    <CSidebar
      visible={visible}
      className='sticky top-0 h-screen border-l-black border-l'
    >
      <CSidebarHeader>
        <CSidebarBrand className='bg-transparent font-bold h-full select-none'>
          Brand Name
        </CSidebarBrand>
      </CSidebarHeader>

      <CSidebarNav>
        <CNavTitle>NavBar</CNavTitle>
        {routes.map((route, index) => (
          <CNavItem
            key={index}
            className='hover:bg-slate-600 text-lg cursor-pointer flex'
          >
            <Link
              to={route.to}
              className='p-3 hover:text-white flex items-center justify-start decoration-none w-full'
            >
              <CIcon className='mr-3' size='lg' icon={route.icon} />
              {route.name}
            </Link>
          </CNavItem>
        ))}
      </CSidebarNav>
    </CSidebar>
  );
}

export default Sidebar;
