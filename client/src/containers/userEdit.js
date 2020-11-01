import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { Link } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import Message from '../components/Message';
import Loader from '../components/Loader';
import FormContainer from '../components/FormContainer';
import {
  AdminGetUserDetails,
  AdminUpdateUserDetails,
  resetUpdateUserReducer,
} from '../redux/user/actions';

const UserEditScreen = ({ match, history }) => {
  const userId = match.params.id;

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.user);
  const user = userDetails.data.userInfoAdmin;
  const loading = userDetails.loading.userInfoAdmin;
  const error = userDetails.error.userInfoAdmin;

  const loadingUpdate = userDetails.loading.updateUserAdmin;
  const errorUpdate = userDetails.error.updateUserAdmin;
  const successUpdate = userDetails.data.updateUserAdmin;

  useEffect(() => {
    if (successUpdate) {
      dispatch({ type: 'ADMIN_RESET_UPDATE_USER' });
      history.push('/admin/userlist');
    }
  }, [dispatch, history, successUpdate]);
  useEffect(() => {
    if (_.isEmpty(user)) dispatch(AdminGetUserDetails(userId));
  }, [dispatch, userId]);
  useEffect(() => {
    setName(user.name);
    setEmail(user.email);
    setIsAdmin(user.isAdmin);
  }, [user]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      AdminUpdateUserDetails(userId, { _id: userId, name, email, isAdmin }),
    );
  };
  console.log(user.name, email, isAdmin);
  return (
    <>
      <Link to="/admin/userlist" className="btn btn-light my-3">
        Go Back
      </Link>
      <FormContainer>
        <h1>Edit User</h1>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="isadmin">
              <Form.Check
                type="checkbox"
                label="Is Admin"
                checked={isAdmin}
                onChange={(e) => setIsAdmin(e.target.checked)}
              ></Form.Check>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default UserEditScreen;
