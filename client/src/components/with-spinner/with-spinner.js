import React from 'react';
import Spinner from '../spinner/spinner'


const WithSpinner = WrappedComponent => ({isloading,...otherProps})=>{
        return isloading ? (
            <Spinner/>
            
        )
            : (<WrappedComponent  {...otherProps}/>)

    }
export default WithSpinner;