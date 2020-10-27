import * as CONSTANTS from './constants';
import produce from 'immer';
export const initialState = {
  loading: {
    order: false,
    orderDetails: false,
    orderPay: false,
    ClientID: false,
    myOrders: false,
    orders: false,
    delivred: false,
  },
  data: {
    order: {},
    success: false,
    orderDetails: {},
    orderItems: [],
    shippingAddress: {},
    orderPaySuccess: false,
    ClientID: '',
    myOrders: [],
    orders: [],
    delivred: false,
  },
  error: {
    order: '',
    orderDetails: '',
    orderPay: '',
    ClientID: '',
    myOrders: '',
    orders: '',
    delivred: '',
  },
};

const reducer = (state = initialState, { type, payload }) =>
  produce(state, (draft) => {
    switch (type) {
      case CONSTANTS.CREATE_ORDER_REQUEST:
        draft.loading.order = true;
        draft.data.success = false;
        break;
      case CONSTANTS.CREATE_ORDER_SUCCESS:
        draft.loading.order = false;
        draft.data.order = payload;
        draft.data.success = true;
        break;
      case CONSTANTS.CREATE_ORDER_FAIL:
        draft.loading.order = false;
        draft.data.success = false;
        break;

      case CONSTANTS.GET_ORDER_DETAILS_REQUEST:
        draft.loading.orderDetails = true;
        break;
      case CONSTANTS.GET_ORDER_DETAILS_SUCCESS:
        draft.loading.orderDetails = false;
        draft.data.orderDetails = payload;
        break;
      case CONSTANTS.GET_ORDER_DETAILS_FAIL:
        draft.loading.orderDetails = false;
        draft.error.orderDetails = payload;
        break;

      case CONSTANTS.ORDER_PAY_REQUEST:
        draft.loading.orderPay = true;
        break;
      case CONSTANTS.ORDER_PAY_SUCCESS:
        draft.loading.orderPay = false;
        draft.data.orderPaySuccess = true;
        break;
      case CONSTANTS.ORDER_PAY_FAIL:
        draft.loading.orderPay = false;
        draft.data.orderPaySuccess = false;
        draft.error.orderPay = payload;
        break;
      case CONSTANTS.ORDER_PAY_RESET:
        draft.loading.orderPay = false;
        draft.data.orderPaySuccess = false;
        draft.error.orderPay = '';
        break;

      case CONSTANTS.GET_CONFIG_REQUEST:
        draft.loading.ClientID = true;
        break;
      case CONSTANTS.GET_CONFIG_SUCCESS:
        draft.loading.ClientID = false;
        draft.data.ClientID = payload;
        break;
      case CONSTANTS.GET_CONFIG_FAIL:
        draft.loading.ClientID = false;
        draft.error.ClientID = payload;
        break;

      case CONSTANTS.GET_MY_ORDERS_REQUEST:
        draft.loading.myOrders = true;
        break;
      case CONSTANTS.GET_MY_ORDERS_SUCCESS:
        draft.loading.myOrders = false;
        draft.data.myOrders = payload;
        break;
      case CONSTANTS.GET_MY_ORDERS_FAIL:
        draft.loading.myOrders = false;
        draft.error.myOrders = payload;
        break;

      case CONSTANTS.GET_ALL_ORDERS_REQUEST:
        draft.loading.orders = true;
        break;
      case CONSTANTS.GET_ALL_ORDERS_SUCCESS:
        draft.loading.orders = false;
        draft.data.orders = payload;
        break;
      case CONSTANTS.GET_ALL_ORDERS_FAIL:
        draft.loading.orders = false;
        draft.error.orders = payload;
        break;

      case CONSTANTS.ORDER_DELIVRED_REQUEST:
        draft.loading.delivred = true;
        break;
      case CONSTANTS.ORDER_DELIVRED_SUCCESS:
        draft.loading.delivred = false;
        draft.data.delivred = true;
        break;
      case CONSTANTS.ORDER_DELIVRED_FAIL:
        draft.loading.delivred = false;
        draft.error.delivred = payload;
        draft.data.delivred = false;
        case CONSTANTS.ORDER_DELIVRED_RESET:
          draft.loading.delivred = false;
          draft.error.delivred = '';
          draft.data.delivred = false;

        break;

      case CONSTANTS.RESET_ORDER:
        draft = {
          loading: {
            order: false,
            orderDetails: false,
            orderPay: false,
            ClientID: false,
            myOrders: false,
          },
          data: {
            order: {},
            success: false,
            orderDetails: {},
            orderItems: [],
            shippingAddress: {},
            orderPaySuccess: false,
            ClientID: '',
            myOrders: [],
          },
          error: {
            order: '',
            orderDetails: '',
            orderPay: '',
            ClientID: '',
            myOrders: '',
          },
        };
        break;
      default:
        return draft;
    }
  });

export default reducer;
