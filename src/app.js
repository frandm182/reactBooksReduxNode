"use strict"
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import reducers from './reducers';

import Main from './Main';
import Menu from './components/Menu';
import Footer from './components/Footer';

const store = createStore(reducers, applyMiddleware(logger));

const App = () => (
  <div>
    <Menu />
    <Main />
    <Footer />
  </div>
)            

const Routes = (
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>
)

render(Routes, document.getElementById('app'));  


