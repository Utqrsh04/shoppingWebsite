import { updateCartInStorage } from "../utils/updateCartInStorage";

export const cartReducer = (state, action) => {
  console.log("cart reducer", state, action);

  switch (action.type) {
    case "ADD_TO_CART": {
      const newState = {
        ...state,
        cart: [...state.cart, { ...action.payload, qty: 1 }],
      };
      updateCartInStorage(newState.cart);
      return newState;
    }

    case "REMOVE_FROM_CART": {
      const newState = {
        ...state,
        cart: state.cart.filter((c) => c._id !== action.payload._id),
      };
      updateCartInStorage(newState.cart);
      return newState;
    }

    case "CHANGE_CART_QTY": {
      const newState = {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload._id ? (c.qty = action.payload.qty) : c.qty
        ),
      };
      updateCartInStorage(newState.cart);
      return newState;
    }

    case "FETCHED_PRODUCTS": {
      const newState = {
        ...state,
        products: action.payload,
      };
      localStorage.setItem("products", JSON.stringify(action.payload));
      return newState;
    }
    default:
      return state;
  }
};
