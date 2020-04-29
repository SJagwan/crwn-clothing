import React from 'react';
import './Cart_Drop.scss'
import CustomBotton from '../CustomButton/CustomButton'

const Cart_Drop=()=>{
    return(
        <div className="cart-drop">
            <div className="cart-items"/>
            <CustomBotton >Go to CheckOut</CustomBotton>
        </div>
    )
}
export default Cart_Drop;