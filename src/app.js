"use strict"
import {createStore} from 'redux';

const reducer = (state={books: []}, action) => {
    switch(action.type) {
        case 'POST_BOOK':
            let books = state.books.concat(action.payload)
            return {books: [...state.books,...action.payload]};
    }
    return state;
}
const store = createStore(reducer);

store.subscribe(() => {
    console.log("current state: ", store.getState());
});

store.dispatch({
    type: 'POST_BOOK',
    payload: [{
        id: 1,
        title: 'First book',
        description: 'Description of first book',
        price: 33.98
    },
    {
        id: 2,
        title: 'Second book',
        description: 'Description of Second book',
        price: 13.50
    }]    
})

store.dispatch({
    type: 'POST_BOOK',
    payload: [{
        id: 1,
        title: 'First book',
        description: 'Description of first book',
        price: 33.98
    }]    
})

