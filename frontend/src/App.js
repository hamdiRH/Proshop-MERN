import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Product from './containers/Product';
import Profile from './containers/Profile';
import Cart from './containers/Cart';
import Shipping from './containers/Shipping';
import Payment from './containers/Payment';
import PlaceOrder from './containers/PlaceOrder';
import Order from './containers/Order';

const App = () => {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/shipping" component={Shipping} />
          <Route path="/Order/:id" component={Order} />
          <Route path="/payment" component={Payment} />
          <Route path="/Placeorder" component={PlaceOrder} />
          <Route path="/profile" component={Profile} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/product/:id" component={Product} />
          <Route path="/cart/:id?" component={Cart} />
          <Route path="/" component={Home} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
