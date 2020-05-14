import {createSelector} from 'reselect';

const selectCart = state =>state.cart;

export const selectCartItem = createSelector(
    [selectCart],
    (cart)=>cart.cartItems
);

export const selectCartItemCount = createSelector(
    [selectCartItem],
    (cartItems)=>cartItems.reduce((accumalatedQuantity,cartItem)=> accumalatedQuantity +cartItem.quantity,0)
)

export const selectCartItemTotal = createSelector(
    [selectCartItem],
    (cartItems)=>cartItems.reduce((accumalatedQuantity,cartItem)=> accumalatedQuantity +cartItem.quantity * cartItem.price,0)
)

export const selectCartHidden =createSelector(
    [selectCart],
    (cart)=>cart.hidden
)