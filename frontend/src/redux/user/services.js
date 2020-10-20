import axios from 'axios';
import {requestHeader} from '../../helpers/requestHeader';
import * as CONSTANTS from '../constants';

export const userDetailsService = async (id) => {
  try {
    const { data } = await axios.get(
      `${CONSTANTS.BaseApi}${CONSTANTS.users.getDetails(id)}`,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const updateUserService = async (user) => {
  try {
    const { data } = await axios.put(
      `${CONSTANTS.BaseApi}${CONSTANTS.users.updateUser}`,
      user,
      requestHeader(),
    );
    return data;
  } catch (error) {
    throw error;
  }
};

