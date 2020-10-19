/**
 * API CONSTANT
 */
export const BaseApi = 'http://localhost:5000/api';
export const products = {
  getAll: '/product',
  getOne: (id) => `/product/${id}`,
};
export const auth = {
  login: '/user/login',
  register: '/user/register',
};
export const users = {
  getDetails: (id) => `/user/${id}`,
};
