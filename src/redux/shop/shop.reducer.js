import Shop_data from './shop-data';

const Initial_State={
    collections:Shop_data
}

const shopReducer=(state=Initial_State,action)=>{
    switch(action.type)
    {
        default:
            return state;
    }
}
export default shopReducer;