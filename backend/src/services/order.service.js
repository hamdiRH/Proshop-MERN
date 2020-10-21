import Order from '../models/order.model';

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
  const order = (await Order.findOne({ _id: params.id })).populate('user','name email').execPopulate();
  if (!order) throw new Error('Order not found');
  return order;
};
