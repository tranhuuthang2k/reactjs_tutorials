import * as actions from '../actions/types';
const initState = {
  shoppingCart: []
};
export const reducerCart = (state = initState, action) => {
  switch (action.type) {
    case actions.INCREMENT_CART:
      let infoProduct = action.data;
      var found = [...state.shoppingCart].find(
        item => item.shoppingCart.id === action.data.id
      );
      if (found) {
        found.shoppingCart.quantity++;
        return {
          ...state,
          shoppingCart: [...state.shoppingCart]
        };
      } else {
        // // shopping cart not product then add product to shopping cart
        infoProduct.quantity = 1;
        var shoppingCart = [
          ...state.shoppingCart,
          {
            shoppingCart: infoProduct
          }
        ];
        return {
          ...state,
          shoppingCart: shoppingCart
        };
      }

    case actions.CHANGE_QUANTITY_CART:
      let foundId = [...state.shoppingCart].find(
        e => e.shoppingCart.id === action.productId
      );
      if (foundId) {
        foundId.shoppingCart.quantity = action.quantity;
      }

      return {
        ...state,
        shoppingCart: [...state.shoppingCart]
      };
    case actions.REMOVE_CART:
      // eslint-disable-next-line no-redeclare
      var shoppingCart = [...state.shoppingCart].filter(
        e => e.shoppingCart.id !== action.productId
      );

      return {
        ...state,
        shoppingCart: shoppingCart
      };
    case actions.CLEAR_CART:
      return {
        ...state,
        shoppingCart: []
      };
    default:
      return state;
  }
};
