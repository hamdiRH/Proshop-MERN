import axios from 'axios';
import { requestHeader } from '../../helpers/requestHeader';
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

export const updateProduct = async (id, product) => {
  try {
    const { data } = await axios.put(
      `${CONSTANTS.BaseApi}${CONSTANTS.products.update(id)}`,
      product,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteProduct = async (id) => {
  try {
    const { data } = await axios.delete(
      `${CONSTANTS.BaseApi}${CONSTANTS.products.delete(id)}`,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};
