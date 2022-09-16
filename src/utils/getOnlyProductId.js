export const getOnlyProductId = (products) => {
  const productIds = [];

  for (let i = 0; i < products.length; i++) {
    productIds.push({
      product_id: products[i].product_id,
      qty: products[i].qty,
    });
  }

  return productIds;
};
