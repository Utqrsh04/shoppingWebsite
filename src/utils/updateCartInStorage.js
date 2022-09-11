export const updateCartInStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};
