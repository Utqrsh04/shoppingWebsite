import { updateCartInStorage } from "../utils/updateCartInStorage";

export const cartReducer = (state, action) => {
  // console.log("cart reducer", state, action);

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

    case "CHANGE_SIZE": {
      const newState = {
        ...state,
        cart: state.cart.filter((c) =>
          c._id === action.payload._id
            ? (c.selectedSize = action.payload.selectedSize)
            : c.selectedSize
        ),
      };
      updateCartInStorage(newState.cart);
      return newState;
    }

    case "FETCHED_PRODUCTS": {
      const newArrivals = action.payload.filter(
        (product) => product.new_arrivals === true
      );
      const newState = {
        ...state,
        products: action.payload,
        newArrivals: newArrivals,
      };
      // localStorage.setItem("products", JSON.stringify(action.payload));
      return newState;
    }
    default:
      return state;
  }
};
