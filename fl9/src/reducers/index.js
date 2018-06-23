import { combineReducers } from "redux";
import { keys, selectedKey } from "./key";

export const getStateKey = state => {
  return state.checkbox;
}

const rootReducer = combineReducers({
  keys,
  selectedKey,
});

export default rootReducer;
