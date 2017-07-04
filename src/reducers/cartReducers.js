'use strict'
//CART REDUCERS
export function cartReducers(state={cart: []}, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            const toadd = state.cart.concat(action.payload);
            return {cart: toadd};
    }
    return state;
}