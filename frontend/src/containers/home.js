import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col } from 'react-bootstrap';
import Loader from '../components/Loader';
import Message from '../components/Message';
import Product from '../components/Product';
import Paginate from '../components/Paginate';
import { Helmet } from 'react-helmet';
import { listProducts } from '../redux/product/actions';
import {
  selectProductsData,
  selectProductLoading,
  selectProductError,
} from '../redux/product/selectors';

const Home = () => {
  const params = useParams();
  const keyword = params.keyword;
  const pageNumber = params.pageNumber || 1;
  const dispatch = useDispatch();
  const loading = useSelector(selectProductLoading);
  const error = useSelector(selectProductError);
  const { products, page, pages } = useSelector(selectProductsData);

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);
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
        <>
          <Row>
            {products.map((product) => (
              <Col sm={12} md={6} lg={4} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            page={page}
            pages={pages}
            keyword={keyword ? keyword : ''}
          />
        </>
      )}
    </>
  );
};

export default Home;
