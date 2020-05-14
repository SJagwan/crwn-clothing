import React from 'react';
import './Collection_Page.scss';
import {connect} from 'react-redux';
import {selectCollection} from '../../redux/shop/shop.selector'
import CollectionItem  from '../../components/collection-items/Collection-items'

// import CollectionItem from '../../components/collection-items/Collection-items';

const CollectionPage =({collections})=>{
    const {title,items}=collections;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="item">
            {
                items.map(item =>(<CollectionItem key={item.id} item={item}/>))
            }

            </div>
            
        </div>
    )
}
const mapStateToProps =(state,ownProps)=>({
    collections:selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);