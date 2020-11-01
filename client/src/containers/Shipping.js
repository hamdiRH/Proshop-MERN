import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { saveShppingAdress } from '../redux/cart/actions';
import {
  selectShippingCartAdress,
} from '../redux/cart/selectors';


const Shipping = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(selectShippingCartAdress) || {};
  const [formData, setFormData] = useState(cart);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(saveShppingAdress(formData));
    history.push('/payment')
  };
  return (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="Shipping page" />
      </Helmet>
      <FormContainer>
          <CheckoutSteps step1 step2/>
        <h1>Shipping</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name="address"
              placeholder="Enter address" 
              value={formData.address}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              name="city"
              placeholder="Enter city"
              value={formData.city}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postalCode">
            <Form.Label>PostalCode</Form.Label>
            <Form.Control
              type="text"
              name="postalCode"
              placeholder="Enter postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              name="country"
              placeholder="Enter country"
              value={formData.country}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

export default Shipping;
