import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';

import './assets/base.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import ProductDetail from './components/ProductDetail';
const store = createStore(applyMiddleware());

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="/" component={SearchResult} />
          <Route path="/" component={ProductDetail} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
registerServiceWorker();
