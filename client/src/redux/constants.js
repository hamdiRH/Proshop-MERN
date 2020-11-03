/**
 * API CONSTANT
 */
export const BaseApi = '/api';
export const products = {
  getAll: (keyword, pageNumber) =>
    `/product?keyword=${keyword}&pageNumber=${pageNumber}`,
  getOne: (id) => `/product/${id}`,
  delete: (id) => `/product/${id}`,
  update: (id) => `/product/${id}`,
  create: '/product',
  createReview: (id) => `/product/${id}/reviews`,
  topProducts: '/product/top',
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
