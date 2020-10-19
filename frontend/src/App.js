import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './containers/Home';
import Login from './containers/Login';
import Register from './containers/Register';
import Product from './containers/Product';
import Cart from './containers/Cart';
import setAuthToken from './helpers/setAuthToken'

const App = () => {
  useEffect(() => {
    setAuthToken()
  }, [])
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
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
