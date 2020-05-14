import React from 'react';
import './CollectionOverview.scss';
import CollectionPreview from '../../components/collection/CollectionPreview';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollectionForPreview } from '../../redux/shop/shop.selector'

const CollectionOverview=({collections})=>{
    return (
        <div className="collection_overview">
            {
                    collections.map(({id,...otherCollectionProps}) =>
                        <CollectionPreview key={id} {...otherCollectionProps}/>)
        
                }
        </div>
    )
}
const mapStateToProps=createStructuredSelector({
    collections: selectShopCollectionForPreview 
})
export default connect(mapStateToProps)(CollectionOverview)