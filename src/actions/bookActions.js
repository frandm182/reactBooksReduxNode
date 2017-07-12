'use strict'
import axios from 'axios';

export function getBooks() {
    return dispatch => {
        axios.get('/api/books')
            .then(response => {
                dispatch({type: 'GET_BOOKS', payload: response.data})
            })
            .catch(err => {
                dispatch({type: 'GET_BOOKS_REJECT', payload: err})
            })
    }
}

export function postBook(book) {
    return dispatch => {
        axios.post('/api/books', book)
            .then(response => {
                dispatch({type: 'POST_BOOK', payload:response.data})
            })
            .catch(err => {
                dispatch({type: 'POST_BOOK_REJECT', payload:err})
            })
    }
}

export function deleteBook(id) {
    return dispatch => {
        axios.delete(`/api/books/${id}`)
        .then(response => {
            dispatch({type: 'DELETE_BOOK', payload:id})
        })
        .catch(err => {
            dispatch({type: 'DELETE_BOOK_REJECT', payload:err})
        })
    }
}

export function updateBook(book) {
    return { 
        type: 'UPDATE_BOOK',
        payload: book
    }
}