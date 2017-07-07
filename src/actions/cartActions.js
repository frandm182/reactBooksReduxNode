'use strict'

//ADD TO CART
export function addToCart(book) {
    return { 
        type: 'ADD_TO_CART',
        payload: book
    }
}

//ADD TO CART
export function updateCart(_id,unit) {
    return { 
        type: 'UPDATE_CART',
        payload: {_id,unit}
    }
}

//ADD TO CART
export function deleteCartItem(_id) {
    return { 
        type: 'DELETE_CART_ITEM',
        payload: _id
    }
}