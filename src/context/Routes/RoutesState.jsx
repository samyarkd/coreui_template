import { cilSpeedometer } from "@coreui/icons";
import { useReducer } from "react";
import { SET_ROUTES } from "../types";
import RoutesContext from "./RoutesContext";
import RoutesReducer from "./routesReducer";

const RoutesState = (props) => {
  const initialState = {
    loading: true,
    routes: [
      {
        to: "project-list",
        icon: cilSpeedometer,
        name: "sssلیست پروژه ها",
      },
    ],
  };

  const [state, dispatch] = useReducer(RoutesReducer, initialState);

  // Set Routes
  const setRoutes = (type) => {
    if (type === "super-admin") {
      const routes = [
        {
          to: "project-list",
          icon: cilSpeedometer,
          name: "لیست پروژه ها",
        },
      ];
      dispatch({ type: SET_ROUTES, payload: routes });
    } else if (type === "project-manager") {
      const routes = [
        {
          to: "project-list",
          icon: cilSpeedometer,
          name: "لیست لیست مدیر محصول",
        },
      ];
      dispatch({ type: SET_ROUTES, payload: routes });
    }
  };

  return (
    <RoutesContext.Provider
      value={{
        routes: state.routes,
        setRoutes,
        loading: state.loading,
      }}
    >
      {props.children}
    </RoutesContext.Provider>
  );
};

export default RoutesState;
