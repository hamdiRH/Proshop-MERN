import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { register } from '../redux/auth/actions';
import {
  selectAuthData,
  selectAuthLoading,
  selectAuthError,
} from '../redux/auth/selectors';

const Register = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [registerData, setRegisterData] = useState({});
  const [message, setMessage] = useState('');
  const userInfo = useSelector(selectAuthData);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const redirect = location.search ? location.search.split('=')[1] : '/';

  useEffect(() => {
    if (!_.isEmpty(userInfo)) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    if (registerData.password !== registerData.confirmPassword)
      setMessage('Passwords do not mach');
    else
      dispatch(
        register({
          name: registerData.name,
          email: registerData.email,
          password: registerData.password,
        }),
      );
  };
  const handleChange = (e) =>
    setRegisterData({ ...registerData, [e.target.name]: e.target.value });
  return (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="login page" />
      </Helmet>
      <FormContainer>
        <h1>Sign Up</h1>
        {error.register && <Message variant="danger">{error.register}</Message>}
        {message && <Message variant="danger">{message}</Message>}
        {loading.register && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={registerData.name}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              value={registerData.email}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Enter password"
              value={registerData.password}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              name="confirmPassword"
              placeholder="Confirm password"
              value={registerData.confirmPassword}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Register
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Have an Account?{' '}
            <Link
              to={redirect !== '/' ? `/login?redirect=${redirect}` : '/login'}
            >
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default Register;
