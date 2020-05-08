import {ShopActionType} from './shop.type';

export const updateCollections=(collectionMap)=>({
   type:ShopActionType.UPDATE_COLLECTIONS,
   payload:collectionMap

})