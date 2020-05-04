import React from 'react';
import './CheckOutPage.scss';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectCartItem,selectCartItemTotal} from '../../redux/cart/cart.selector';
import CheckOutItem from '../../components/checkoutitems/CheckOutItem'
import StripeCheckoutButton from '../../components/stripebutton/Stripe_Button'

const CheckOutPage=({cartItems,Total})=>{
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Discreption</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>remove</span>
                </div>

            </div>
            {
                cartItems.map(cartItem => <CheckOutItem key={cartItem.id} item={cartItem}/>)
            }
            <div className="total">
                <span>{`Total : ${Total}`}</span>
            </div>
            <StripeCheckoutButton price={Total}/>
        </div>
    )
}
const mapStateToProps= createStructuredSelector({
    cartItems : selectCartItem,
    Total:selectCartItemTotal
})
export default connect(mapStateToProps)(CheckOutPage);