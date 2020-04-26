import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {signInWithGoogle} from '../../firebase/firebase.utils';

class SignIn extends React.Component{
    constructor(){
        super()
        this.state={
            email:"",
            password:""
        }
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});

    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:"",password:""});

    }
    render(){
        return(
            <div className="signin">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>

                    <FormInput name="email" type="text"  value={this.state.email}
                            handleChange={this.handleChange} label="Email"/>
            
                    <FormInput name="password" type="password" 
                          value={this.state.password} handleChange={this.handleChange} label="Password"/>
                          <div className="buttons">
                                <CustomButton type="submit">SignIn</CustomButton>
                                <CustomButton onClick={signInWithGoogle} isGoogleSignIn>SignIn With Google</CustomButton>

                          </div>
                    

                </form>
                

            </div>

        )
    }
}
export default SignIn;