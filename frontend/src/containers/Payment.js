import React, { useState } from 'react';
import _ from 'lodash';
import { Link, useLocation, useHistory } from 'react-router-dom';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';

import FormContainer from '../components/FormContainer';
import CheckoutSteps from '../components/CheckoutSteps';
import { savePaymentMethod } from '../redux/cart/actions';
import {
  selectShippingCartAdress,
  selectPaymentMethod,
  selectCartItemsLoading,
  selectCartItemsError,
} from '../redux/cart/selectors';
import PropTypes from 'prop-types';

const Payment = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const history = useHistory();
  const paymentMethodSelector = useSelector(selectPaymentMethod) || 'Paypal';
  const shippingAdress = useSelector(selectShippingCartAdress) || {};

  const [paymentMethod, setPaymentMethod] = useState(paymentMethodSelector);
  if (_.isEmpty(shippingAdress)) {
    history.push('/shipping');
  }

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(savePaymentMethod(paymentMethod));
    history.push('/placeorder');
  };
  return (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="Payment page" />
      </Helmet>
      <FormContainer>
        <CheckoutSteps step1 step2 step3 />
        <h1>Payment Method</h1>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <Form.Label as="legend">Select Method</Form.Label>
            <Col>
              <Form.Check
                type="radio"
                label="Paypal or Credit Card"
                id="Paypal"
                name="paymentMethod"
                value="Paypal"
                defaultChecked={paymentMethodSelector === 'Paypal'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>

              <Form.Check
                type="radio"
                label="Stripe"
                id="Stripe"
                name="paymentMethod"
                value="Stripe"
                defaultChecked={paymentMethodSelector === 'Stripe'}
                onChange={(e) => setPaymentMethod(e.target.value)}
              ></Form.Check>
            </Col>
          </Form.Group>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FormContainer>
    </>
  );
};

Payment.propTypes = {};

export default Payment;
