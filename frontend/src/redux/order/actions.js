import * as CONSTANTS from './constants';

export const createOrder = (order) => ({
  type: CONSTANTS.CREATE_ORDER_REQUEST,
  order,
});

export const getOrderDetails = (id) => ({
  type: CONSTANTS.GET_ORDER_DETAILS_REQUEST,
  id,
});

export const updateOrderToPaid = (id, body) => ({
  type: CONSTANTS.GET_ORDER_DETAILS_REQUEST,
  orderId: id,
  paymentResult: body,
});
