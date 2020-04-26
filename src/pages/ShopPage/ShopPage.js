import React from 'react';
import './ShopPage.scss';
import Shop_data from '../../shop-data';
import CollectionPreview from '../../components/collection/CollectionPreview';

class ShopPage extends React.Component{
    constructor(){
        super()
        this.state={
            collections:Shop_data
        }
    }
    render(){
   const {collections}=this.state;
        return(
            <div className="shop_page">
                {
                    collections.map(({id,...otherCollectionProps}) =>
                        <CollectionPreview key={id} {...otherCollectionProps}/>)
        
                }
            </div>
        );
    } 
    
}
export default ShopPage;