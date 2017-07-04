'use strict'
import {combineReducers} from 'redux';

import {bookReducer} from './bookReducers';
import {cartReducers} from './cartReducers';

export default combineReducers({
    books: bookReducer,
    cart: cartReducers
})