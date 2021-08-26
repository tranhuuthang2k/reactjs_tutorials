import * as types from './types';
export const getDataProducts = () => ({
  type: types.Get_DATA_PRODUCT
});
//sagas
export const startGetProduct = start => ({
  type: types.START_GET_DATA_PRODUCT,
  start
});

export const getProductSuccess = data => ({
  type: types.GET_DATA_SUCESS,
  data
});

export const getProductFail = error => ({
  type: types.GET_DATA_FAIL,
  error
});

export const stopGetProduct = stop => ({
  type: types.STOP_GET_DATA_PRODUCT,
  stop
});
// ACTION DETAILS

export const getDataProductById = id => ({
  type: types.GET_DATA_PRODUCT_BY_ID,
  id
});

//sagas
export const startGetProductById = start => ({
  type: types.START_GET_DATA_PRODUCT,
  start
});

export const getProductByIdSuccess = data => ({
  type: types.GET_DATA_SUCESS_BY_ID,
  data
});

export const getProductByIdFail = error => ({
  type: types.GET_DATA_FAIL_BY_ID,
  error
});

export const stopGetProductById = stop => ({
  type: types.STOP_GET_DATA_PRODUCT_BY_ID,
  stop
});

// SHOPPING CART

export const incrementCartAction = (number, data) => ({
  type: types.INCREMENT_CART,
  number: number,
  data: data
});
export const decrementCartAction = () => ({
  type: types.DECREMENT_CART
});

export const changeQuantityCartAction = (quantity, productId) => ({
  type: types.CHANGE_QUANTITY_CART,
  quantity: quantity,
  productId: productId
});
export const removetCartAction = (productId, quantity) => ({
  type: types.REMOVE_CART,
  productId: productId
});
export const ClearCart = () => ({
  type: types.CLEAR_CART
});

// LOGIN
export const loginRequestAction = (email, password) => ({
  type: types.LOGIN_REQUEST,
  email: email,
  password: password
});

export const startStatusLoginAction = loading => ({
  type: types.START_STATUS_LOGIN,
  loading: loading
});

export const loginFail = error => ({
  type: types.LOGIN_FAIL,
  error: error
});

// CHECKOUT
export const Checkoutloading = start => ({
  type: types.CHECKOUT_LOADING,
  start
});

export const Checkout = (
  ID,
  Firstname,
  address,
  companyname,
  country,
  email,
  lastname,
  phone,
  towncity,
  cart,
  date,
  totalprice
) => ({
  type: types.CHECKOUT_SUCCESS,
  ID,
  Firstname,
  address,
  companyname,
  country,
  email,
  lastname,
  phone,
  towncity,
  cart,
  date,
  totalprice
});
