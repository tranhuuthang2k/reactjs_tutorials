import * as actions from "../actions/types";
const initState = {
  loading: false,
  productDetail: {},
};
export const reducerDetail = (state = initState, action) => {
  switch (action.type) {
    case actions.START_GET_DATA_PRODUCT:
      return {
        ...state,
        loading: action.start,
      };
    case actions.GET_DATA_SUCESS_BY_ID:
      return {
        ...state,
        productDetail: action.data,
      };
    case actions.STOP_GET_DATA_PRODUCT_BY_ID:
      return {
        ...state,
        loading: action.stop,
      };
    case actions.GET_DATA_FAIL_BY_ID:
      return {
        ...state,
        productData: {},
      };
    default:
      return state;
  }
};
