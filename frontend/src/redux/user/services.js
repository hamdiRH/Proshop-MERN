import axios from 'axios';
import * as CONSTANTS from '../constants';

export const userDetailsService = async (id) => {
  try {
    const { data } = await axios.get(`${CONSTANTS.BaseApi}${CONSTANTS.users.getDetails(id)}`);
    return data
  } catch (error) {
      throw error
  }
};

