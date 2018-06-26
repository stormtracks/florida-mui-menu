import { combineReducers } from "redux";
import { keys, selectedKey } from "./key";

const rootReducer = combineReducers({
  keys,
  selectedKey
});

export default rootReducer;
