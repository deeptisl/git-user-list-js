import * as actionTypes from "../ActionType/index";

const initialState = {
  usersList: [],
  userDetails: {}
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_USERS:
      return {
        ...state,
        usersList: action.payload
      };
    case actionTypes.USER_DETAILS:
      return {
        ...state,
        userDetails: action.payload
      };
    default:
      return state;
  }
};

export default reducer;

