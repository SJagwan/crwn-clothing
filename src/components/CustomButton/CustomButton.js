import React from 'react';
import './CustomButton.scss';

const CustomButton=({children,isGoogleSignIn,inverted,...otherprops})=>{
    return(
            <button className={`${isGoogleSignIn?"google-sign":""} ${inverted?"inverted":""} custom-button`} {...otherprops}>
                {children}
            </button>

    )
}
export default CustomButton;