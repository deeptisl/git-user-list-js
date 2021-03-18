import { SEARCH_USERS, USER_DETAILS } from "../actionTypes/index";

const initialState = {
  usersList: [],
  userDetails: {}
};

function reducer (state = initialState, action) {
  if (action.type === SEARCH_USERS) {
    return {
      ...state,
      usersList: action.payload
    };
  }
  if (action.type === USER_DETAILS) {
    return {
      ...state,
      userDetails: action.payload
    };
  }
  return state;
};

export default reducer;

