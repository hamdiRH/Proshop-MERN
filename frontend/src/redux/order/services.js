import axios from 'axios';
import * as CONSTANTS from '../constants';
import { requestHeader } from '../../helpers/requestHeader';

export const createOrderService = async (order) => {
  try {
    const { data } = await axios.post(
      `${CONSTANTS.BaseApi}${CONSTANTS.order.createOrder}`,
      order,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getOrderService = async (id) => {
  try {
    const { data } = await axios.get(
      `${CONSTANTS.BaseApi}${CONSTANTS.order.getOrder(id)}`,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateOrderToPaid = async (id, body) => {
  try {
    const { data } = await axios.put(
      `${CONSTANTS.BaseApi}${CONSTANTS.order.updateOrderToPaid(id)}`,
      body,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};
