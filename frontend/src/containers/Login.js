import React, { useEffect, useState } from 'react';
import _ from 'lodash';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Row, Col, Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import { login } from '../redux/auth/actions';
import {
  selectAuthData,
  selectAuthLoading,
  selectAuthError,
} from '../redux/auth/selectors';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const userInfo = useSelector(selectAuthData);
  const loading = useSelector(selectAuthLoading);
  const error = useSelector(selectAuthError);
  const redirect = location.search ? location.search.split('=')[1] : '/';
console.log("xxx",_.isEmpty(userInfo))
  useEffect(() => {
    if (!_.isEmpty(userInfo)) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="login page" />
      </Helmet>
      <FormContainer>
        <h1>Sign In</h1>
        {error.login && <Message variant="danger">{error.login}</Message>}
        {loading.login && <Loader />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
            <Button type="submit" variant="primary" className="mt-4">
              Sign In
            </Button>
          </Form.Group>
        </Form>
        <Row className="py-3">
          <Col>
            New Customer?{' '}
            <Link
              to={redirect ? `/register?redirect=${redirect}` : '/register'}
            >
              Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default Login;