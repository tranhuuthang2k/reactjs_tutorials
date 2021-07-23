import * as actions from "../actions/types";
const initState = {
  loading: false,
  productData: {},
};
export const homeReducer = (state = initState, action) => {
  switch (action.type) {
    case actions.START_GET_DATA_PRODUCT:
      return {
        ...state,
        loading: action.start,
      };
    case actions.GET_DATA_SUCESS:
      return {
        ...state,
        productData: action.data,
      };
    case actions.STOP_GET_DATA_PRODUCT:
      return {
        ...state,
        loading: action.stop,
      };
    case actions.GET_DATA_FAIL:
      return {
        ...state,
        productData: {},
      };

    default:
      return state;
  }
};
