"use strict"
import {createStore} from 'redux';
import reducers from './reducers'
const store = createStore(reducers);

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
    }]    
})

store.dispatch({
    type: 'POST_BOOK',
    payload: [
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
        id: 3,
        title: 'Third book',
        description: 'Description of third book',
        price: 15.30
    }]    
})

store.dispatch({
    type: 'DELETE_BOOK',
    payload: { id: 2 }    
})

store.dispatch({
    type: 'UPDATE_BOOK',
    payload: { 
         id: 3,
        title: 'Third book changed'
     }    
})

