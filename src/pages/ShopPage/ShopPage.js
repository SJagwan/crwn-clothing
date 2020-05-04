import React from 'react';
import './ShopPage.scss';
import {Route} from 'react-router-dom'
import CollectionOverview from '../../components/collection-overview/CollectionOverview';
import CollectionPage from '../CollectionPage/Collection_Page';


const ShopPage=({match})=>{
        return(
            <div className="shop_page">
               <Route exact path={`${match.path}`} component={CollectionOverview}/>
               <Route path={`${match.url}/:collectionId`} component={CollectionPage}/>
            </div>
        );
}

export default ShopPage;