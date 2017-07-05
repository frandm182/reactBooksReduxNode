"use strict"
import {applyMiddleware, createStore} from 'redux';
import reducers from './reducers';
import {addToCart} from './actions/cartActions';
import BookList from './components/BookList';
import {postBook, deleteBook, updateBook} from './actions/bookActions';
import logger from 'redux-logger';
const store = createStore(reducers, applyMiddleware(logger));
import React from 'react';
import {render} from 'react-dom';

// store.subscribe(() => {
//     console.log("current state: ", store.getState());
// });

render(<BookList/>,document.getElementById('app'));

store.dispatch(postBook([{
    id: 1,
    title: 'First book',
    description: 'Description of first book',
    price: 33.98
}]));

store.dispatch(postBook([{
    id: 2,
    title: 'Second book',
    description: 'Description of Second book',
    price: 13.50
}]));

store.dispatch(postBook([{
    id: 3,
    title: 'Third book',
    description: 'Description of third book',
    price: 15.30
}]));    

store.dispatch(deleteBook({id: 2}));

store.dispatch(updateBook({
    id: 3,
    title: 'Third book changed'
}));

store.dispatch(addToCart([{id: 3}]));
store.dispatch(addToCart([{id: 2}]));

