import { createContext, useContext, useReducer } from "react";
import { cartReducer } from "./reducer";

const Cart = createContext();

const Context = ({ children }) => {
  const products = [];

  const cartData = JSON.parse(localStorage.getItem("cart"));

  const [state, dispatch] = useReducer(cartReducer, {
    products: products,
    cart: cartData ? cartData : [],
  });

  return <Cart.Provider value={{ state, dispatch }}>{children}</Cart.Provider>;
};

export const CartState = () => {
  return useContext(Cart);
};

export default Context;
