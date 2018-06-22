export const TOGGLE_CHECKBOX = "TOGGLE_CHECKBOX";
export const ADD_KEY = "ADD_KEY";
export const SELECT_KEY = "SELECT_KEY";

export const toggleCheckbox = name => ({
    type: TOGGLE_CHECKBOX,
    name
})

export const addKey = key => ({
    type: ADD_KEY,
    key
});

export const selectKey = key => ({
    type: SELECT_KEY,
    key
});
