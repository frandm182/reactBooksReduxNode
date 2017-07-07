'use strict'
//CART REDUCERS
export function cartReducers(state={cart: []}, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state,
                cart: action.payload,
                totalAmount: totals(action.payload).amount,
                totalQuantity: totals(action.payload).quantity
            };            
        case 'DELETE_CART_ITEM':
            const currentBookToDelete =[...state.cart];
            const indexToDelete = currentBookToDelete.findIndex(cart => cart._id === action.payload)
            let cartAfterDelete = [...currentBookToDelete.slice(0, indexToDelete), ...currentBookToDelete.slice(indexToDelete + 1)];
            return {...state,
                cart: cartAfterDelete,
                totalAmount: totals(cartAfterDelete).amount,
                totalQuantity: totals(cartAfterDelete).quantity
            };
        case 'UPDATE_CART':
            const currentBookToUpdate = [...state.cart];
            const indexToUpdate = currentBookToUpdate.findIndex(book => book._id === action.payload._id);
            const newBookToUpdate = {...currentBookToUpdate[indexToUpdate],quantity:currentBookToUpdate[indexToUpdate].quantity + action.payload.unit};
            let cartUpdate = [...currentBookToUpdate.slice(0,indexToUpdate),newBookToUpdate,...currentBookToUpdate.slice(indexToUpdate + 1)];
            return {...state,
                cart:cartUpdate,
                totalAmount: totals(cartUpdate).amount,
                totalQuantity: totals(cartUpdate).quantity
            };
    }
    return state;
}

export const totals = (cartBooks) => {
    const totalPrice = cartBooks
        .map(book => book.price * book.quantity)
        .reduce(((a,b) => a + b),0);

    const totalQty = cartBooks
        .map(book => book.quantity)
        .reduce(((a,b) => a + b), 0);

    return {amount: totalPrice.toFixed(2), quantity: totalQty}
}