import React from 'react';
import './Cart_Drop.scss'
import CustomBotton from '../CustomButton/CustomButton'
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux';
import {selectCartItem} from '../../redux/cart/cart.selector'

const Cart_Drop=({cartItems})=>{
    return(
        <div className="cart-drop">
            <div className="cart-items">
                {
                    cartItems.map(cartItem=>
                        <CartItem key={cartItem.id} item={cartItem}/>)
                }
            </div>
            <CustomBotton >Go to CheckOut</CustomBotton>
        </div>
    )
}
const mapStateToProps=(state)=>({
    cartItems:selectCartItem(state)

})
export default connect(mapStateToProps)(Cart_Drop);