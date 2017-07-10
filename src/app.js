"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducers from './reducers';
import BookList from './components/BookList';
import Menu from './components/Menu';
import Footer from './components/Footer';

const store = createStore(reducers, applyMiddleware(logger));
import React from 'react';
import {render} from 'react-dom';

render(
    <Provider store={store}>
        <div>
            <Menu />
            <BookList />
            <Footer />
        </div>
        
    </Provider>
    ,document.getElementById('app')
);  


