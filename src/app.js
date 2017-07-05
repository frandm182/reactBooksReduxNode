"use strict"
import {applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';
import {Provider} from 'react-redux';
import reducers from './reducers';
import {addToCart} from './actions/cartActions';
import BookList from './components/BookList';
import {postBook, deleteBook, updateBook} from './actions/bookActions';

const store = createStore(reducers, applyMiddleware(logger));
import React from 'react';
import {render} from 'react-dom';

render(
    <Provider store={store}>
        <BookList/>
    </Provider>
    ,document.getElementById('app')
);  


