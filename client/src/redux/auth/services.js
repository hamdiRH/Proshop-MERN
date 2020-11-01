import axios from 'axios';
import * as CONSTANTS from '../constants';

export const loginService = async (body) => {
  try {
    const { data } = await axios.post(`${CONSTANTS.BaseApi}${CONSTANTS.auth.login}`,body);
    return data
  } catch (error) {
      throw error
  }
};

export const loginWithFG = async (body) => {
  try {
    const { data } = await axios.post(`${CONSTANTS.BaseApi}${CONSTANTS.auth.loginFG}`,body);
    return data
  } catch (error) {
      throw error
  }
};

export const registerService = async (body) => {
  try {
    const { data } = await axios.post(`${CONSTANTS.BaseApi}${CONSTANTS.auth.register}`,body);
    return data
  } catch (error) {
      throw error
  }
};