'use strict'
//CART REDUCERS
export function cartReducers(state={cart: []}, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {cart: [...state,...action.payload]};            
        case 'DELETE_CART_ITEM':
            return {cart: [...state,...action.payload]};
        case 'UPDATE_CART':
            const currentBookToUpdate = [...state.cart];
            const indexToUpdate = currentBookToUpdate.findIndex(book => book._id === action.payload._id);
            const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],quantity:currentBookToUpdate[indexToUpdate].quantity + action.payload.unit};
            let cartUpdate = [...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate,...currentBookToUpdate.slice(indexToUpdate + 1)];
            return {...state,cart:cartUpdate};
    }
    return state;
}

