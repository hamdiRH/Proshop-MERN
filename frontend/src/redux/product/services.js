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

export const createProduct = async () => {
  try {
    const { data } = await axios.post(
      `${CONSTANTS.BaseApi}${CONSTANTS.products.create}`,
      {},
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const uploadFile = async (file) => {
  try {
    const { data } = await axios.post(
      `${CONSTANTS.BaseApi}${CONSTANTS.file.upload}`,
      file,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const createReview = async (id, review) => {
  try {
    const { data } = await axios.post(
      `${CONSTANTS.BaseApi}${CONSTANTS.products.createReview(id)}`,
      review,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};
