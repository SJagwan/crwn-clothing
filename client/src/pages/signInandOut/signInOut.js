import React from 'react';
import './signInOut.scss';
import SignIn from '../../components/signIn/SignIn';
import SignUp from '../../components/signUp/SignUp'

const SignInOut=()=>{
    return(
        <div className="signinout">
            <SignIn/>
            <SignUp/>


        </div>
    )
}
export default SignInOut;