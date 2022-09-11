export const getOnlyProductId = (products) => {
  const productIds = [];

  for (let i = 0; i < products.length; i++) {
    productIds.push(products[i].product_id);
  }

  return productIds;
};
