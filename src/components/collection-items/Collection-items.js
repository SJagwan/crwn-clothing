import React from 'react';
import './Collection-items.scss';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux';
import {addItem}  from '../../redux/cart/cart.action'



const CollectionItem=({item,addItem})=>{
    const {name,price,imageUrl}=item
    return(
        <div className="collectionItems">
            <div className="image" style={{backgroundImage:`url(${imageUrl})`}}/>
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>`

            </div>
            <CustomButton inverted onClick={()=>addItem(item)}>Add to Cart</CustomButton>

        </div>
    )
}

const mapDispatchToprops = dispatch => ({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToprops)(CollectionItem);