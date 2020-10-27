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
  loginFG: '/user/loginfg',
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
  getAllOrder: '/order',
  getOrder: (id) => `/order/${id}`,
  updateOrderToPaid: (id) => `/order/${id}/pay`,
  delivredOrder: (id) => `/order/${id}/delivred`,
  myOrders: '/order/myorders',
};
export const config = {
  paypalClientId: '/config/paypal',
};
export const file = {
  upload: '/file/upload',
};
