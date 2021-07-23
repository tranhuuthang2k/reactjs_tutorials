import * as types from "./types";
export const getDataProducts = () => ({
  type: types.Get_DATA_PRODUCT,
});
//sagas
export const startGetProduct = (start) => ({
  type: types.START_GET_DATA_PRODUCT,
  start,
});

export const getProductSuccess = (data) => ({
  type: types.GET_DATA_SUCESS,
  data,
});

export const getProductFail = (error) => ({
  type: types.GET_DATA_FAIL,
  error,
});

export const stopGetProduct = (stop) => ({
  type: types.STOP_GET_DATA_PRODUCT,
  stop,
});
// ACTION DETAILS

export const getDataProductById = (id) => ({
  type: types.GET_DATA_PRODUCT_BY_ID,
  id,
});

//sagas
export const startGetProductById = (start) => ({
  type: types.START_GET_DATA_PRODUCT,
  start,
});

export const getProductByIdSuccess = (data) => ({
  type: types.GET_DATA_SUCESS_BY_ID,
  data,
});

export const getProductByIdFail = (error) => ({
  type: types.GET_DATA_FAIL_BY_ID,
  error,
});

export const stopGetProductById = (stop) => ({
  type: types.STOP_GET_DATA_PRODUCT_BY_ID,
  stop,
});
