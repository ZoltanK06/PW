import React, {useState} from 'react'
import {Link} from 'react-router-dom';
import {LogInContainer, LogInHeader, LogInBox, Input, Inputs, Button, ButtonLink, Logo} from '../Styles/LogIn.style'
import Bckg from '../images/AccountMaking.jpg';

function LogIn(props) {

    const {
        email, 
        setEmail, 
        name, 
        setName, 
        password, 
        setPassword, 
        confirmPassword, 
        setConfirmPassword, 
        emailError, 
        setEmailError,
        passwordError,
        setPasswordError,
        confirmPasswordError,
        setConfirmPasswordError,
        hasAccount,
        setHasAccount,
        handleLogin,
        handleLogOut,
        handleSignup,
        user,
        setUser,
        changePagetoSignup,
        catchErrors,
        loading,
        clearErrors,
        setSignInForm,
        signInForm
    } = props;

    return (
        <LogInContainer style={{backgroundImage: `url(${Bckg})`}}>
            <LogInHeader to="/"> <Logo /> </LogInHeader>
            <LogInBox>
                <h2>Log in</h2>
                <form>
                    <Inputs>
                        <label htmlFor="login-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="login-email" required onChange={(e) => setSignInForm({...signInForm, email: e.target.value})} />
                        <p>{emailError}</p>
                    </Inputs>
                    <Inputs>
                        <label htmlFor="login-password">Password</label>
                        <Input type="password" placeholder="Password" id="login-password"required onChange={(e) => setSignInForm({...signInForm, password: e.target.value})}/>
                        <p>{passwordError}</p>
                    </Inputs>
                    <Button disabled={loading}>
                        <ButtonLink disabled={loading} onClick={handleLogin}>Log in</ButtonLink>
                    </Button>
                </form>
                <span>Don't have an account?
                    <Link onClick={changePagetoSignup} to="/Signup">Sign Up</Link>
                </span>
            </LogInBox>
        </LogInContainer>
    )
}
export default LogIn
