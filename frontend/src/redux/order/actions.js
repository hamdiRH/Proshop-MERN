import * as CONSTANTS from './constants';

export const createOrder = (order) => ({
  type: CONSTANTS.CREATE_ORDER_REQUEST,
  order
});
