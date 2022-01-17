import { useReducer } from "react";
import { TOGGLE_SIDEBAR } from "../types";
import SidebarContext from "./SidebarContext";
import SidebarReducer from "./sidebarReducer";

const SidebarState = (props) => {
  const initialState = {
    visible: true,
  };

  const [state, dispatch] = useReducer(SidebarReducer, initialState);

  //   Toggle Sidebar
  const toggleSidebar = () => {
    dispatch({ type: TOGGLE_SIDEBAR });
  };

  return (
    <SidebarContext.Provider
      value={{
        visible: state.visible,
        toggleSidebar,
      }}
    >
      {props.children}
    </SidebarContext.Provider>
  );
};

export default SidebarState;
