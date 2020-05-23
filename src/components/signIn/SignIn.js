import React, { Component } from 'react';
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";
import { auth, signInWithGoogle } from "../../firebase/firebase"
import "./signIn.styles.scss";

class SignIn extends Component {
    state = {
        email:"",
        password:""
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = this.state;
        try{
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({
                email: "",
                password: ""})
        }catch(err){
            console.log(err);
            
        }
    }

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            [name]:value
        })
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput handleChange={this.onChange} name="email" type="email" value={this.state.email} label="Email" required></FormInput>
                    <FormInput handleChange={this.onChange} name="password" type="password" value={this.state.password} label="Password" required></FormInput>

                    <div className="buttons">
                        <CustomButton type="submit">Sign in</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignIn
