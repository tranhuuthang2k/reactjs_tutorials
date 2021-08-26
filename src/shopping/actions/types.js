// TYPE PRODUCT
export const Get_DATA_PRODUCT = Symbol('GET_DATA_PRODUCT');
export const START_GET_DATA_PRODUCT = Symbol('START_GET_DATA_PRODUCT');
export const GET_DATA_SUCESS = Symbol('GET_DATA_SUCESS');
export const GET_DATA_FAIL = Symbol('GET_DATA_FAIL');
export const STOP_GET_DATA_PRODUCT = Symbol('STOP_GET_DATA_PRODUCT');
export const NOT_FOUND_DATA_PRODUCT = Symbol('NOT_FOUND_DATA_PRODUCT');

// TYPE DETAIL
export const GET_DATA_PRODUCT_BY_ID = Symbol('GET_DATA_PRODUCT_BY_ID');
// SAGAS DETAIL
export const START_GET_DATA_PRODUCT_BY_ID = Symbol(
  'START_GET_DATA_PRODUCT_BY_ID'
);
export const GET_DATA_SUCESS_BY_ID = Symbol('GET_DATA_SUCESS_BY_ID');
export const GET_DATA_FAIL_BY_ID = Symbol('GET_DATA_FAIL_BY_ID');
export const STOP_GET_DATA_PRODUCT_BY_ID = Symbol(
  'STOP_GET_DATA_PRODUCT_BY_ID'
);
export const NOT_FOUND_DATA_PRODUCT_BY_ID = Symbol(
  'NOT_FOUND_DATA_PRODUCT_BY_ID'
);
// Shopping cart
export const INCREMENT_CART = Symbol('INCREMENT_CART');
export const DECREMENT_CART = Symbol('DECREMENT_CART');
export const REMOVE_CART = Symbol('REMOVE_CART');
export const CHANGE_QUANTITY_CART = Symbol('CHANGE_QUANTITY_CART');
export const CLEAR_CART = Symbol('CLEAR_CART');
// Login
export const LOGIN_REQUEST = Symbol('LOGIN_REQUEST');
export const START_STATUS_LOGIN = Symbol('START_STATUS_LOGIN');
export const LOGIN_FAIL = Symbol('LOGIN_FAIL');

// Checkout
export const CHECKOUT_LOADING = Symbol('CHECKOUT_LOADING');
export const CHECKOUT_SUCCESS = Symbol('CHECKOUT_SUCCESS');
export const CHECKOUT_FAILED = Symbol('CHECKOUT_FAILED');
