import React, { useEffect } from 'react';
import _ from 'lodash';
import { Link, useParams } from 'react-router-dom';
import { Row, Col, ListGroup, Image, Card } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';

import {
  selectOrderDetailsData,
  selectLoadingOrder,
  selectErrorOrder,
} from '../redux/order/selectors';
import { getOrderDetails } from '../redux/order/actions';

const Order = () => {
  const params = useParams();
  const orderId = params.id;
  const { order } = useSelector(selectOrderDetailsData);
  const errorOrder = useSelector(selectErrorOrder);
  const loadingOrder = useSelector(selectLoadingOrder);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(orderId));
  }, [dispatch, orderId]);

  return loadingOrder.orderItems ? (
    <Loader />
  ) : errorOrder.orderItems ? (
    <Message variant="danger">{errorOrder.orderItems}</Message>
  ) : (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="Order page" />
      </Helmet>
      <h1>Order {order._id}</h1>
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              {order.user && (
                <>
                  <p>
                    <strong>Name:</strong> {order.user.name}
                  </p>
                  <p>
                    <a href={`mailto:${order.user.email}`}>
                      {order.user.email}
                    </a>
                  </p>
                </>
              )}
              <p>
                <strong>Adress:</strong>
                {order.shippingAddress &&
                  ` ${order.shippingAddress.address}, ${order.shippingAddress.city} - ${order.shippingAddress.postalCode} ${order.shippingAddress.country}`}
              </p>
              {order.isDelivered ? (
                <Message variant="success">
                  Delivered on {order.deliveredAt}
                </Message>
              ) : (
                <Message variant="danger">Not Delivered</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {order.paymentMethod}
              </p>
              {order.isPaid ? (
                <Message variant="success">Paid on {order.paidAt}</Message>
              ) : (
                <Message variant="danger">Not Paid</Message>
              )}
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {_.isEmpty(order.orderItems) ? (
                <Message>Order is empty</Message>
              ) : (
                <ListGroup>
                  {order.orderItems.map((item) => (
                    <ListGroup.Item key={item.product}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.image}
                            alt={item.name}
                            fluid
                            rounded
                          />
                        </Col>
                        <Col>
                          <Link to={`/product/${item.product}`}></Link>
                          {item.name}
                        </Col>
                        <Col md={5}>
                          {item.qty} x ${item.price} = $
                          {(item.qty * item.price).toFixed(2)}
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup>
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>
                    {/* ${order.itemsPrice} */}

                    {order.orderItems &&
                      "$"+order.orderItems.reduce(
                        (acc, item) => acc + item.price,
                        0,
                      )}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${order.shippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${order.taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default Order;
