import React from 'react';
import './SignUp.scss';
import FormInput from '../FormInput/FormInput';
import CustomButton from '../CustomButton/CustomButton';
import {auth ,createUserProfileDoc} from '../../firebase/firebase.utils'

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
        if(password !== confirmPassword)
        {
            alert("Password don't match");
            return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email,password);
            await createUserProfileDoc(user,{displayName});
            this.setState({displayname:"",email:"",password:"",confirmPassword:""});

        }catch(error){
            console.error(error);

        }
        

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
                         value={this.state.confirmPassword} handleChange={this.handleChange} label="confirmPassword"/>
                    
                    <CustomButton type="submit">SignUp</CustomButton>
                        

                    

                </form>
                

            </div>

        )
    }
}
export default SignUp;