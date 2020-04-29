import {CartActionTypes} from './cart.type';
import {addItemsToCart} from './cart.utils'

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
        default:
            return state;
    }
}
export default cartReducer;