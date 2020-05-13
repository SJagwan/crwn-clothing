import React from 'react';
import './SignIn.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';

import {connect} from 'react-redux'
import {googleSignInStart,emailSignInStart} from '../../redux/user/user.action'

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
    handleSubmit=async(e)=>{
        e.preventDefault();
        const {emailSignInStart}=this.props
        const {email,password}=this.state;
        emailSignInStart(email,password);
       

    }
    render(){
        const {googleSignInStart}=this.props
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
                                <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>SignIn With Google</CustomButton>

                          </div>
                    

                </form>
                

            </div>

        )
    }
}
const mapDispatchToState=dispatch =>({
    googleSignInStart:()=> dispatch(googleSignInStart()),
    emailSignInStart:(email,password)=> dispatch(emailSignInStart({email,password}))


})

export default connect(null,mapDispatchToState)(SignIn);