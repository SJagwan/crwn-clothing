import {createSelector} from 'reselect';

export const selectShop = state => state.shop;

export const selectShopCollection=createSelector(
    [selectShop],
    (shop)=>shop.collections
)
export const selectShopCollectionForPreview = createSelector(
    [selectShopCollection],
    (collections)=> collections ? Object.keys(collections).map(key => collections[key]) :
                        []
)
export const selectCollection= collectionUrlParam => 
createSelector(
    [selectShopCollection],
    (collections)=> collections ? collections[collectionUrlParam] :null
)