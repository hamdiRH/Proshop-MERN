import * as CONSTANTS from './constants';

export const getUserDetails = (id) => ({
  type: CONSTANTS.USER_DETAILS_REQUEST,
  id,
});


