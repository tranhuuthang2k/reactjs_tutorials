import * as actions from '../actions/types';
const initState = {
  loading: false,
  Checkout: []
};
export const reducerCheckout = (state = initState, action) => {
  switch (action.type) {
    case actions.CHECKOUT_LOADING:
      return {
        ...state,
        loading: action.start
      };
    case actions.CHECKOUT_SUCCESS:
      return {
        ...state,
        Checkout: [
          ...state.Checkout,
          {
            ID: action.ID,
            Firstname: action.Firstname,
            address: action.address,
            companyname: action.companyname,
            country: action.country,
            email: action.email,
            lastname: action.lastname,
            phone: action.phone,
            towncity: action.towncity,
            cart: action.cart,
            date: action.date,
            totalprice: action.totalprice
          }
        ],
        loading: false
      };

    default:
      return state;
  }
};
