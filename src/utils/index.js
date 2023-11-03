/**
 * This function calculates total price of a new order
 * @param {Array} arryProducts cartProduct: Array of Objects
 * @returns {Number} Total price
 */
export const totalPrice = (arryProducts) => {
  return arryProducts.reduce((sum, produtc) => sum + produtc.price, 0);
};
