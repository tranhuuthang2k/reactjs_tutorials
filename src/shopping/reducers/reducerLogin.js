import * as actions from "../actions/types";
const initState = {
  loading: false,
  error: {},
};
export const reducerLogin = (state = initState, action) => {
  switch (action.type) {
    case actions.START_STATUS_LOGIN:
      return {
        ...state,
        loading: action.loading,
      };
    case actions.LOGIN_FAIL:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};
