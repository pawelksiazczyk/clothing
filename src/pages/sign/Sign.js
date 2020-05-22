import React from 'react';
import "./sign.styles.scss";
import SignIn from "../../components/signIn/SignIn";
import SignUp from "../../components/signup/SignUp"

const Sign = () => {
    return (
        <div className="sign-in-and-sign-out">
            <SignIn/>
            <SignUp />
        </div>
    )
}

export default Sign
