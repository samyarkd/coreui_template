import { cilAccountLogout } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import {
  CAvatar,
  CDropdown,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from "@coreui/react";
import React, { useContext } from "react";
import AuthContext from "../../../context/auth/AuthContext";

function HeaderDropDown() {
  const { logout } = useContext(AuthContext);

  return (
    <CDropdown variant='nav-item'>
      <CDropdownToggle placement='bottom-end' className='py-0' caret={false}>
        <CAvatar color='dark' size='md' />
      </CDropdownToggle>
      <CDropdownMenu className='pt-0' placement='bottom-end'>
        <CDropdownHeader className='bg-light fw-semibold py-2'>
          Name
        </CDropdownHeader>

        <CDropdownItem
          onClick={() => {
            logout();
          }}
          className='mt-1'
          href='#'
        >
          Logout
          <CIcon icon={cilAccountLogout} className='me-2' />
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  );
}

export default HeaderDropDown;
