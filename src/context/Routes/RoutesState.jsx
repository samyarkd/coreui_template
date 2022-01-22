import { cilSpeedometer } from "@coreui/icons";
import { useReducer } from "react";
import RoutesContext from "./RoutesContext";
import RoutesReducer from "./routesReducer";

const RoutesState = (props) => {
  const initialState = {
    routes: [
      {
        to: "dashboard",
        icon: cilSpeedometer,
        name: "Dashboard",
      },
      {
        to: "test",
        icon: cilSpeedometer,
        name: "Test",
      },
    ],
  };

  const [state, dispatch] = useReducer(RoutesReducer, initialState);

  return (
    <RoutesContext.Provider
      value={{
        routes: state.routes,
      }}
    >
      {props.children}
    </RoutesContext.Provider>
  );
};

export default RoutesState;
