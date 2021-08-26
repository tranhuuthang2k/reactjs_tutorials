import { createSelector } from 'reselect';
const homeState = state => state.homeReducer;
const reducerState = state => state.reducerDetail;
const reducerLogin = state => state.reducerLogin;
const reducerCheckout = state => state.reducerCheckout;
export const getLoadingProduct = createSelector(
  homeState,
  item => item.loading
);
export const getDataProducts = createSelector(
  homeState,
  item => item.productData
);
export const getDataProductFeautured = createSelector(getDataProducts, item => {
  if (item.hasOwnProperty('featured')) {
    return item.featured;
  }
  return {};
});
export const getDataProductLatest = createSelector(getDataProducts, item => {
  if (item.hasOwnProperty('latest')) {
    return item.latest;
  }
  return {};
});
export const getDataProductTopSelling = createSelector(
  getDataProducts,
  item => {
    if (item.hasOwnProperty('top_selling')) {
      return item.top_selling;
    }
    return {};
  }
);

// Detail
export const getLoadingProductById = createSelector(
  reducerState,
  item => item.loading
);
export const getDataProductDetail = createSelector(
  reducerState,
  item => item.productDetail
);
// login
export const loginFailMessage = createSelector(reducerLogin, item => {
  if (item.error.cod) {
    return 'acount invalid';
  }
});

// Checkout
export const CheckoutProduct = createSelector(
  reducerCheckout,
  item => item.Checkout
);
export const LoadingCheckout = createSelector(
  reducerCheckout,
  item => item.loading
);
