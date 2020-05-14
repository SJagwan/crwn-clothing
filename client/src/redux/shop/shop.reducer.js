
import {ShopActionType} from './shop.type';

const Initial_State={
    isFetching:false,
    Error:"",
    collections:null
}

const shopReducer=(state=Initial_State,action)=>{
    switch(action.type)
    {
        case ShopActionType.FETCH_COLLECTION_START:
            return{
                ...state,
                isFetching:true
            }
        case ShopActionType.FETCH_COLLECTION_SUCCESS:
            return {
                ...state,
                collections:action.payload,
                isFetching:false
            }
        case ShopActionType.FETCH_COLLECTION_FAILURE:
            return{
                ...state,
                isFetching:false,
                Error:action.payload
            }
        
        default:
            return state;
    }
}
export default shopReducer;