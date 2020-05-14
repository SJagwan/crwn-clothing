import React from 'react';
import './Cart_Icon.scss'
import {ReactComponent as ShopImage} from '../../Assets/shopping_icon.svg'
import {toggleCartHidden} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';
import {selectCartItemCount} from '../../redux/cart/cart.selector'

const Cart_Icon=({toggleCartHidden,ItemCount})=>{
    return(
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShopImage className="shopping-icon" />
            <span className="item-count"> {ItemCount}</span>
            

        </div>
    )
}
const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=> dispatch(toggleCartHidden())
})
const mapStateToProps =(state)=>({
    ItemCount: selectCartItemCount(state)

})
export default connect(mapStateToProps,mapDispatchToProps)(Cart_Icon);