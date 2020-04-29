import {CartActionTypes} from './cart.type';

const Initial_State={
    hidden:true
}

const cartReducer = (state = Initial_State,action)=>{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return{
                ...state,
                hidden:!state.hidden
            }
        default:
            return state;
    }
}
export default cartReducer;