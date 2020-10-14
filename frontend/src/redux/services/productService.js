import axios from 'axios';
import * as CONSTANTS from '../constants';

export const fechProducts = async () => {
  try {
    const { data } = await axios.get(
      `${CONSTANTS.BaseApi}${CONSTANTS.products.getAll}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const fechProductDetail = async (id) => {
  try {
    const { data } = await axios.get(
      `${CONSTANTS.BaseApi}${CONSTANTS.products.getOne(id)}`,
    );
    return data;
  } catch (error) {
    throw error;
  }
};
