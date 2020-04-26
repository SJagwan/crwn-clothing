import React from 'react';
import './CustomButton.scss';

const CustomButton=({children,...otherprops})=>{
    return(
            <button className="custom-button" {...otherprops}>
                {children}
            </button>

    )
}
export default CustomButton;