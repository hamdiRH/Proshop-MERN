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
  type: CONSTANTS.ORDER_PAY_REQUEST,
  orderId: id,
  paymentResult: body,
});

export const updateOrderToDelivred = (id) => ({
  type: CONSTANTS.ORDER_DELIVRED_REQUEST,
  id,
});

export const getConfig = () => ({
  type: CONSTANTS.GET_CONFIG_REQUEST,
});

export const resetOrderPay = () => ({
  type: CONSTANTS.ORDER_PAY_RESET,
});

export const getMyOrders = () => ({
  type: CONSTANTS.GET_MY_ORDERS_REQUEST,
});

export const getAllOrders = () => ({
  type: CONSTANTS.GET_ALL_ORDERS_REQUEST,
});
