import React from 'react';
import './Collection-items.scss';



const CollectionItem=({name,price,imageUrl})=>{
    return(
        <div className="collectionItems">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>`

            </div>

        </div>
    )
}
export default CollectionItem;