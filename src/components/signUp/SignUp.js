import React from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {connect} from 'react-redux';
import {signUpStart} from '../../redux/user/user.action'

class SignUp extends React.Component{
    constructor(){
        super()
        this.state={
            displayName:"",
            email:"",
            password:"",
            confirmPassword:""
        }
    }
    handleChange=(event)=>{
        const {value,name}=event.target;
        this.setState({[name]:value});

    }
    handleSubmit= async (e)=>{
        e.preventDefault();
        const {displayName,email,password,confirmPassword}=this.state;
        const {signUpStart}=this.props;
        


        if(password !== confirmPassword)
        {
            alert("Password don't match");
            return;
        }
        signUpStart({email,password,displayName});
        

    }
    render(){
        return(
            <div className="signup">
                <h2>I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form"onSubmit={this.handleSubmit}>

                     <FormInput name="displayName" type="text"  value={this.state.displayName}
                            handleChange={this.handleChange} label="DisplayName" required/>

                    <FormInput name="email" type="text"  value={this.state.email}
                            handleChange={this.handleChange} label="Email" required/>
            
                    <FormInput name="password" type="password" required
                          value={this.state.password} handleChange={this.handleChange} label="Password"/>
                    <FormInput name="confirmPassword" type="password" required
                         value={this.state.confirmPassword} handleChange={this.handleChange} label="ConfirmPassword"/>
                    
                    <CustomButton type="submit">SignUp</CustomButton>
                        

                    

                </form>
                

            </div>

        )
    }
}

const mapDispatchToProps= dispatch =>({
    signUpStart:(UserData) => dispatch(signUpStart(UserData))
})
export default connect(null,mapDispatchToProps)(SignUp);