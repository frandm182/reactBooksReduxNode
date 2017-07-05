'use strict'
export function bookReducer(state={books: [{
    id: 1,
    title: 'First book',
    description: 'Description of first book',
    price: 33.98
},{
    id: 2,
    title: 'Second book',
    description: 'Description of Second book',
    price: 13.50
},{
    id: 3,
    title: 'Third book',
    description: 'Description of third book',
    price: 15.30
}]}, action) {
    switch(action.type) {
        case 'GET_BOOKS':
            return {...state,books: [...state.books]};
        case 'POST_BOOK':
            return {books: [...state.books,...action.payload]};
        case 'DELETE_BOOK':
            const currentBookToDelete = [...state.books]
            const indexToDelete = currentBookToDelete.findIndex(book => book.id === action.payload.id)
            return { books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
        case 'UPDATE_BOOK':
            const currentBookToUpdate = [...state.books]
            const indexToUpdate = currentBookToUpdate.findIndex(book => book.id === action.payload.id);
            const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title};
            return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]};      
    }
    return state;
}