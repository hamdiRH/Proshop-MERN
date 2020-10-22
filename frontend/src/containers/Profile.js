import React, { useEffect, useState } from 'react';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Message from '../components/Message';
import Loader from '../components/Loader';
import { getUserDetails, updateUserDetails } from '../redux/user/actions';
import {
  selectUserData,
  selectUserLoading,
  selectUserError,
  selectUpdatedUserData,
} from '../redux/user/selectors';

const Profile = () => {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({});
  const [message, setMessage] = useState('');
  const user = useSelector(selectUserData);
  const updatedUser = useSelector(selectUpdatedUserData);
  const loading = useSelector(selectUserLoading);
  const error = useSelector(selectUserError);

  useEffect(() => {
    if (!user.name) {
      dispatch(getUserDetails('profile'));
    } else {
      setUserData({
        name: user.name,
        email: user.email,
      });
    }
  }, [user, dispatch]);
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
        </Col>
      </Row>
    </>
  );
};

export default Profile;
