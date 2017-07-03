"use strict"
import {createStore} from 'redux';

const reducer = (state={books: []}, action) => {
    switch(action.type) {
        case 'POST_BOOK':
            let books = state.books.concat(action.payload)
            return {books: [...state.books,...action.payload]};
        case 'DELETE_BOOK':
            const currentBookToDelete = [...state.books]
            const indexToDelete = currentBookToDelete.findIndex(book => book.id === action.payload.id)
            return { books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
        case 'UPDATE_BOOK':
            const currentBookToUpdate = [...state.books]
            const indexToUpdate = currentBookToUpdate.findIndex(book => book.id === action.payload.id);
            const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title};
            console.log(newBookToUpdate);
            return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]};
        
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

