import asyncHandler from 'express-async-handler';
import * as orderService from '../services/order.service';

//@des Create new order
//@route POST /api/order
//@access Private
export const addOrderItems = asyncHandler(async (req, res) => {
  const order = await orderService.addOrderItems(req);
  res.status(201).send(order);
});

//@des get an order by id
//@route GET /api/order
//@access Private
export const getOrderItemsById = asyncHandler(async (req, res) => {
  const order = await orderService.getOrderItemsById(req);
  res.status(200).send(order);
});

//@des Update order to paid
//@route PUT /api/order/:id/pay
//@access Private
export const updateOrderToPaid = asyncHandler(async (req, res) => {
  const order = await orderService.updateOrderToPaid(req);
  res.status(200).send(order);
});

//@des Get Logged in user orders
//@route GET /api/order/myorders
//@access Private
export const getMyOrders = asyncHandler(async (req, res) => {
  console.log("a3333")
  const orders = await orderService.getMyOrders(req);
  res.status(200).send(orders);
});