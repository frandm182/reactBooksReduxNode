'use strict'
export function bookReducer(state={books: []}, action) {
    switch(action.type) {
        case 'GET_BOOKS':
            return {...state,books: [...action.payload]};
        case 'POST_BOOK':
            return {books: [...state.books,...action.payload]};
        case 'DELETE_BOOK':
            const currentBookToDelete = [...state.books]
            const indexToDelete = currentBookToDelete.findIndex(book => book._id == action.payload)
            return { books: [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)]};
        case 'UPDATE_BOOK':
            const currentBookToUpdate = [...state.books]
            const indexToUpdate = currentBookToUpdate.findIndex(book => book._id === action.payload._id);
            const newBookToUpdate = {...currentBookToUpdate[indexToUpdate], title: action.payload.title};
            return { books: [...currentBookToUpdate.slice(0, indexToUpdate), newBookToUpdate, ...currentBookToUpdate.slice(indexToUpdate + 1)]};      
    }
    return state;
}