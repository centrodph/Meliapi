import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { Route, BrowserRouter } from 'react-router-dom';

import './assets/base.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './components/Landing';
import ProductDetail from './components/ProductDetail';
import SearchResult from './components/SearchResult';
import appReducers from './reducers';
const createAppStore = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createAppStore(appReducers)}>
    <BrowserRouter>
      <div>
        <Header />
        <Switch>
          <Route
            path={`${process.env.PUBLIC_PATH}/items/:id`}
            component={ProductDetail}
          />
          <Route
            path={`${process.env.PUBLIC_PATH}/items`}
            component={SearchResult}
          />
          <Route path={`${process.env.PUBLIC_PATH}/`} component={Landing} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector('#root')
);
