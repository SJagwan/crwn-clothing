import React from 'react';


const WithSpinner = WrappedComponent => {
    const Spinner =({isloading,...otherProps})=>{
        return isloading ? (
            <div className="spinner-overlay">
                <div className="spinner-container">
                </div>
            </div>
        )
            : (<WrappedComponent  {...otherProps}/>)

    }
    return Spinner;
    

}
export default WithSpinner;