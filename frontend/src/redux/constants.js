/**
 * API CONSTANT
 */
export const BaseApi = 'http://localhost:5000/api';
export const products = {
  getAll: '/product',
  getOne: (id) => `/product/${id}`,
  delete: (id) => `/product/${id}`,
  update: (id) => `/product/${id}`,
  create: '/product',
};
export const auth = {
  login: '/user/login',
  register: '/user/register',
};
export const users = {
  getDetails: (id) => `/user/${id}`,
  updateUser: '/user/profile',
  getUsers: '/user',
  deleteUser: (id) => `/user/${id}`,
};
export const order = {
  createOrder: '/order',
  getOrder: (id) => `/order/${id}`,
  updateOrderToPaid: (id) => `/order/${id}/pay`,
  myOrders: '/order/myorders',
};
export const config = {
  paypalClientId: '/config/paypal',
};
