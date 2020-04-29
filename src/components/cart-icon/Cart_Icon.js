import React from 'react';
import './Cart_Icon.scss'
import {ReactComponent as ShopImage} from '../../Assets/shopping_icon.svg'
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';

const Cart_Icon=({toggleCartHidden})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopImage className="shopping-icon" />
            <spam className="item-count"> 0</spam>
            

        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
export default connect(null,mapDispatchToProps)(Cart_Icon);