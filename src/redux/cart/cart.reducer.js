import {CartActionTypes} from './cart.type';
import {addItemsToCart,removeItemsFromCart} from './cart.utils'

const Initial_State={
    cartItems:[],
    hidden:true
}

const cartReducer = (state = Initial_State,action)=>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            };
        case CartActionTypes.ADD_ITEM:
            return{
                ...state,
                cartItems:addItemsToCart(state.cartItems,action.payload)

            };
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
            return{
                ...state,
                cartItems:state.cartItems.filter(cartItem => cartItem.id !== action.payload.id)

            };
         case CartActionTypes.REMOVE_ITEM:
                return{
                    ...state,
                    cartItems:removeItemsFromCart(state.cartItems,action.payload)
                };
        default:
            return state;
    }
}
export default cartReducer;