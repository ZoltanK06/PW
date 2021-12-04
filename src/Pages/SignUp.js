import React , {useState} from 'react'
import {Link} from 'react-router-dom';
import {SignUpContainer, SignUpHeader, SignUpBox, Input, Inputs, Button, ButtonLink, Logo} from '../Styles/SignUp.style'
import Bckg from '../images/AccountMaking.jpg';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth';
import {app} from '../firebase-config';

function SignUp(props) {

    const {
        emailError, 
        passwordError,
        confirmPasswordError,
        handleSignup,
        changePagetoLogin,
        nameError,
        loading,
        signUpForm,
        setSignUpForm
    } = props;

    return (
        
        <SignUpContainer style={{backgroundImage: `url(${Bckg})`}}>
            <SignUpHeader to="/"> <Logo /> </SignUpHeader>
            <SignUpBox>
                <h2>Sign Up</h2>
            <form >
                <Inputs>
                    <label htmlFor="signup-name">Full Name</label>
                    <Input type="text" placeholder="Full Name" id="signup-name" required onChange={(e) => setSignUpForm({...signUpForm, name: e.target.value})}/>
                    <p>{nameError}</p>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-email">Email Address</label>
                    <Input type="text" placeholder="name@email.com" id="signup-email" required onChange={(e) => setSignUpForm({...signUpForm, email: e.target.value})}/>
                    <p>{emailError}</p>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Password</label>
                    <Input type="password" placeholder="Password" id="signup-password" required onChange={(e) => setSignUpForm({...signUpForm, password: e.target.value})}/>
                    <p>{passwordError}</p>
                </Inputs>
                <Inputs>
                    <label htmlFor="signup-password">Confirm Password</label>
                    <Input type="password" placeholder="Confirm Password" id="signup-confirm" required onChange={(e) => setSignUpForm({...signUpForm, confirmPassword: e.target.value})}/>
                    <p>{confirmPasswordError}</p>
                </Inputs>
                <Button disabled={loading} >   
                        <ButtonLink disabled={loading} onClick={handleSignup}>Sign Up</ButtonLink>
                </Button>
            </form>
                <span>Already have an account?
                    <Link onClick={changePagetoLogin} to="/LogIn">Log In</Link>
                </span>
            </SignUpBox>
        </SignUpContainer>
    )
}

export default SignUp
