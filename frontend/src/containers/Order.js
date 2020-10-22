import React, { useEffect } from 'react';
import _ from 'lodash';
import { Link, useHistory } from 'react-router-dom';
import {
  Button,
  Row,
  Col,
  ListGroup,
  Image,
  Card,
  ListGroupItem,
} from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';

import {
  selectOrderData,
  selectSuccessOrder,
  selectLoadingOrder,
  selectErrorOrder,
} from '../redux/order/selectors';
import { getOrderDetails } from '../redux/order/actions';
import Cart from './Cart';

const Order = (props) => {
  const shippingAddress = useSelector(selectShippingCartAdress) || {};
  const paymentMethodSelector = useSelector(selectPaymentMethod) || 'Paypal';
  const cartItems = useSelector(selectCartItemsData);
  const history = useHistory();
  const order = useSelector(selectOrderData);
  const successOrder = useSelector(selectSuccessOrder);
  const errorOrder = useSelector(selectErrorOrder);
  const loadingOrder = useSelector(selectLoadingOrder);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (successOrder) {
      history.push(`order/${order._id}`);
    }
    // eslint-disable-next-line
  }, [history, successOrder]);
  const placeOrderHandler = () => {
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress: shippingAddress,
        paymentMethod: paymentMethodSelector,
        itemsPrice,
        ShippingPrice,
        taxPrice,
        totalPrice,
      }),
    );
  };
  return (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="Place Order page" />
      </Helmet>
      <CheckoutSteps step1 step2 step3 step4 />
      <Row>
        <Col md={8}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>Shipping</h2>
              <p>
                <strong>Adress:</strong>
                {shippingAddress.address}, {shippingAddress.city} -{' '}
                {shippingAddress.postalCode} {shippingAddress.country}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Payment Method</h2>
              <p>
                <strong>Method: </strong>
                {paymentMethodSelector}
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h2>Order Items</h2>
              {_.isEmpty(cartItems) ? (
                <Message>Your cart is empty</Message>
              ) : (
                <ListGroup>
                  {cartItems.map((item) => (
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
                  <Col>${itemsPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Shipping</Col>
                  <Col>${ShippingPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Tax</Col>
                  <Col>${taxPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Total</Col>
                  <Col>${totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              {errorOrder && (
                <ListGroup.Item>
                  <Message variant="danger">{errorOrder}</Message>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Button
                  type="button"
                  className="btn-block"
                  disabled={_.isEmpty(cartItems)}
                  onClick={placeOrderHandler}
                >
                  Place Order
                </Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  );
};

Order.propTypes = {};

export default Order;
