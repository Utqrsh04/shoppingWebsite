export const calculateTotalPrice = (products) => {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    totalPrice = products[i].price * products[i].qty + totalPrice;
  }
  return totalPrice;
};
