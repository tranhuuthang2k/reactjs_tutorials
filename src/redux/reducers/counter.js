import * as types from "../actions/types";
const initialState = {
  count: 0,
};
export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.INCREMENT_COUNTER:
      return { ...state, count: action.payload.val + 1 };
    case types.DECREMENT_COUNTER:
      return { ...state, count: action.payload.val - 1 };
    default:
      return state;
  }
};
