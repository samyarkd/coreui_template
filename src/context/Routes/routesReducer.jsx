import { SET_ROUTES } from "../types";

export default function routesReducer(state, action) {
  switch (action.type) {
    case SET_ROUTES:
      return { routes: action.payload, loading: false };
    default:
      return null;
  }
}
