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
