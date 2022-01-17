import { cilMenu } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CContainer, CHeader, CHeaderNav, CHeaderToggler } from "@coreui/react";
import React, { useContext } from "react";
import SidebarContext from "./../../../context/Sidebar/SidebarContext";
import HeaderDropDown from "./HeaderDropDown";

function Header() {
  const { toggleSidebar } = useContext(SidebarContext);
  return (
    <>
      <CHeader className='z-10 w-full sticky top-0'>
        <CContainer fluid>
          <CHeaderNav>
            <HeaderDropDown />
            <div className='flex flex-col justify-between items-start'>
              <span>Name</span>
              <span className='text-gray-400 text-sm'>Role</span>
            </div>
          </CHeaderNav>
          <CHeaderToggler
            onClick={() => {
              toggleSidebar();
            }}
            className='ps-1'
          >
            <CIcon icon={cilMenu} size='lg' />
          </CHeaderToggler>
        </CContainer>
      </CHeader>
    </>
  );
}

export default Header;
