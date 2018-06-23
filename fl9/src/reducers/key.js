import { SELECT_KEY, ADD_KEY } from "../actions";

export function selectedKey(state = 'ch1', action) {
  switch (action.type) {
    case SELECT_KEY:
      return action.key;
    default:
      return state;
  }
}

export const keys = (state = ['ch1','ch2'], action) => {
  switch (action.type) {
    case ADD_KEY:
      return [...state, action.key];
    default:
      return state;
  }
};
