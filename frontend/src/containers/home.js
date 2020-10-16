import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import { Helmet } from 'react-helmet';
import { listProducts } from '../redux/product/actions';
import {
  selectProductsData,
  selectProductLoading,
  selectProductError,
} from '../redux/product/selectors';

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const products = useSelector(selectProductsData);

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);
  return (
    <>
      <Helmet>
        <title>Proshop</title>
        <meta name="description" content="home page" />
      </Helmet>
      <h1>Latest Products</h1>
      {loading.products ? (
        <Loader />
      ) : error.products ? (
        <Message variant="danger">{error.products}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col sm={12} md={6} lg={4} key={product._id}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </>
  );
};

export default Home;
