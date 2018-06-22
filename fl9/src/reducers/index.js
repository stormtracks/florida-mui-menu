import { combineReducers } from "redux";
//import { checkbox } from "./checkbox";
import { keys, selectedKey } from "./key";

export const getStateKey = state => {
  return state.checkbox;
}

const rootReducer = combineReducers({
//  checkbox,
  keys,
  selectedKey,
});

export default rootReducer;
