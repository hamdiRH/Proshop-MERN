import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form, Table } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserDetails } from '../redux/user/actions';
import { getMyOrders } from '../redux/order/actions';
import {
  selectUserData,
  selectUserLoading,
  selectUserError,
  selectUpdatedUserData,
} from '../redux/user/selectors';

import {
  selectMyOrders,
  selectLoadingOrder,
  selectErrorOrder,
} from '../redux/order/selectors';

const Profile = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState('');
  const user = useSelector(selectUserData);
  const updatedUser = useSelector(selectUpdatedUserData);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  const orders = useSelector(selectMyOrders);
  const { myOrders: loadingOrder } = useSelector(selectLoadingOrder);
  const { myOrders: errorOrder } = useSelector(selectErrorOrder);
  if (!localStorage.getItem('token')) {
    history.push('/login');
  }
  useEffect(() => {
    if (!updatedUser) history.push('/login');
    else if (!user.name) {
      dispatch(getUserDetails('profile'));
      dispatch(getMyOrders());
    } else {
      setUserData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, dispatch, history,updatedUser]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (userData.password !== userData.confirmPassword)
      setMessage('Passwords do not mach');
    else {
      dispatch(
        updateUserDetails({
          name: userData.name,
          email: userData.email,
          password: userData.password,
        }),
      );
    }
  };
  const handleChange = (e) =>
    setUserData({ ...userData, [e.target.name]: e.target.value });
  return (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="Profile page" />
      </Helmet>
      <Row>
        <Col md={3}>
          <h2>User Profile</h2>
          {error.user && <Message variant="danger">{error.user}</Message>}
          {updatedUser.success && (
            <Message variant="success">Profile Updated</Message>
          )}

          {message && <Message variant="danger">{message}</Message>}
          {loading.user && <Loader />}
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter name"
                value={userData.name}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter email"
                value={userData.email}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder="Enter password"
                value={userData.password}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                value={userData.confirmPassword}
                onChange={handleChange}
              ></Form.Control>
            </Form.Group>
            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        </Col>
        <Col md={9}>
          <h2>My Orders</h2>
          {loadingOrder ? (
            <Loader />
          ) : errorOrder ? (
            <Message variant="danger">{errorOrder}</Message>
          ) : (
            <Table striped bordered hover responsive className="table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>DATE</th>
                  <th>TOTAL</th>
                  <th>PAID</th>
                  <th>DELIVERED</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td>{order._id}</td>
                    <td>{order.createdAt.substring(0, 10)}</td>
                    <td>{order.totalPrice}</td>
                    <td>
                      {order.isPaid ? (
                        order.paidAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <i
                          className="fas fa-times"
                          style={{ color: 'red' }}
                        ></i>
                      )}
                    </td>
                    <td>
                      <LinkContainer to={`/order/${order._id}`}>
                        <Button className="btn-sm" variant="light">
                          Details
                        </Button>
                      </LinkContainer>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Col>
      </Row>
    </>
  );
};

export default Profile;
