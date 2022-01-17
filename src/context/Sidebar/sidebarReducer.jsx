import { TOGGLE_SIDEBAR } from "../types";

export default function sidebarReducer(state, action) {
  switch (action.type) {
    case TOGGLE_SIDEBAR:
      return { visible: !state.visible };
    default:
      return null;
  }
}
