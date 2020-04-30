import React from 'react';
import './Cart_Drop.scss'
import CustomBotton from '../CustomButton/CustomButton'
import CartItem from '../cart-item/CartItem';
import {connect} from 'react-redux';
import {selectCartItem} from '../../redux/cart/cart.selector';
import {withRouter} from 'react-router-dom';
import {toggleCartHidden} from '../../redux/cart/cart.action'

const Cart_Drop=({cartItems,history,toggleCartHidden})=>{
    return(
        <div className="cart-drop">
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem=>
                        <CartItem key={cartItem.id} item={cartItem}/>)
                        :
                        <span className="empty-message">Your Cart Is empty</span>
                }
            </div>
            <CustomBotton onClick={()=>
              { history.push('/checkout');
              toggleCartHidden()
                     }} 
        >Go to CheckOut</CustomBotton>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})

const mapStateToProps=(state)=>({
    cartItems:selectCartItem(state)

})
export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Cart_Drop));