import axios from 'axios';
import * as CONSTANTS from '../constants';

export const addToCartService = async (id) => {
  try {
    const { data } = await axios.get(`${CONSTANTS.BaseApi}${CONSTANTS.products.getOne(id)}`);
    return data
  } catch (error) {
      throw error
  }
};
