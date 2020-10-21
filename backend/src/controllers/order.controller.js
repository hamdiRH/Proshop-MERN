import asyncHandler from 'express-async-handler';
import * as orderService from '../services/order.service';

//@des Create new order
//@route POSR /api/orders
//@access Private
export const addOrderItems = asyncHandler(async (req, res) => {
  const order = await orderService.addOrderItems(req);
  res.status(201).send(order);
});