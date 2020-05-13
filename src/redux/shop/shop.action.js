import {ShopActionType} from './shop.type';



export const fetchCollectionStart=()=>({
   type:ShopActionType.FETCH_COLLECTION_START,
})

export const fetchCollectionSuccess=(collectionsMap)=>({
   type:ShopActionType.FETCH_COLLECTION_SUCCESS,
   payload:collectionsMap
})

export const fetchCollectionError=(error)=>({
   type:ShopActionType.FETCH_COLLECTION_FAILURE,
   payload:error
})