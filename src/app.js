"use strict"
import React from 'react';
import {render} from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import {HashRouter} from 'react-router-dom';

import Main from './Main';
import reducers from './reducers';



const store = createStore(reducers, applyMiddleware(logger));

const App = () => (
  <div>
    <Main />
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


