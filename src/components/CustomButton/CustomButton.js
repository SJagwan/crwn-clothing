import React from 'react';
import './CustomButton.scss';

const CustomButton=({children,isGoogleSignIn,...otherprops})=>{
    return(
            <button className={`${isGoogleSignIn?"google-sign":""} custom-button`} {...otherprops}>
                {children}
            </button>

    )
}
export default CustomButton;