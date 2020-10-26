import Order from '../models/order.model';
import moment from 'moment';

export const addOrderItems = async ({ body, user }) => {
  const { orderItems, shippingAddress, paymentMethod, itemsPrice, taxPrice, shippingPrice, totalPrice } = body;

  if (orderItems && orderItems.length === 0) {
    res.status(400);
    throw new Error('No order items');
  } else {
    const order = new Order({
      orderItems,
      user: user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });

    const createdOrder = await order.save();

    return createdOrder;
  }
};

export const getOrderItemsById = async ({ params }) => {
  const order = (await Order.findOne({ _id: params.id })).populate('user', 'name email').execPopulate();
  if (!order) throw new Error('Order not found');
  return order;
};

export const updateOrderToPaid = async ({ params, body }) => {
  const order = await Order.findOne({ _id: params.id });
  if (!order) throw new Error('Order not found');
  order.isPaid = true;
  order.paidAt = moment();
  order.paymentReslt = {
    id: body.id,
    status: body.status,
    update_time: moment(body.update_time),
    email_address: body.payer.email_address,
  };
  const updatedOrder = await order.save();
  return updatedOrder;
};

export const getMyOrders = async ({ user }) => {
  const orders = await Order.find({ user: user._id });
  if (!orders) throw new Error('Orders not found');
  return orders;
};

export const getAllorders = async () => {
  const orders = await Order.find();
  if (!orders) throw new Error('Orders not found');
  return orders;
};
