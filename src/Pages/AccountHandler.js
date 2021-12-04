import React from 'react'
import { useState, useEffect, useContext } from 'react';
import LogIn from './LogIn'
import SignUp from './SignUp'
import { GiBatteryPackAlt } from 'react-icons/gi';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {signin, signup} from '../actions/auth';

function AccountHandler() {

    const dispatch = useDispatch();
    const history = useHistory();

    // Fields:
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [signInForm, setSignInForm] = useState({email: "", password: ""});
    const [signUpForm, setSignUpForm] = useState({name: "", email: "", password: "", confirmPassword: "", type: "simple"});

    // Errors:
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');
    const [nameError, setNameError] = useState('');
    const [Errors, setErrors] = useState(false);

    // Other:
    const [page, setPage] = useState(true);
    const [hasAccount, setHasAccount] = useState(false);
    const [user, setUser] = useState("");
    
    const [loading, setLoading] = useState(false)

    const clearInputs = () => {
        setEmail('');
        setPassword('');
        setName('');
        setConfirmPassword('');
    }

    const clearErrors = () => {
        setEmailError('');
        setConfirmPasswordError('');
        setPasswordError('');
        setNameError('');
        setErrors(false);
    }

    const catchErrors = () => {
        if( (nameError || emailError || passwordError || confirmPasswordError) !== ''){
            setErrors(true);
        }
    }

    const changePagetoSignup = () => {
        clearErrors();
        clearInputs();
        if(page){
            setPage(false);
        }
    }

    const changePagetoLogin = () => {
        clearErrors();
        clearInputs();
        if(!page){
            setPage(true);
        }
    }

    async function handleLogin(e){
        e.preventDefault();
        clearErrors();

        dispatch(signin(signInForm, history));
    }

    async function handleSignup(e) {
        e.preventDefault()
        clearErrors();


        if (signUpForm.name === ''){
            return setNameError("Please introduce a valid name!")
        }

        if (signUpForm.password.length < 6){
            return setPasswordError("Password must be at least 6 characters long!")
        }

        if (signUpForm.password !== signUpForm.confirmPassword) {
           return setConfirmPasswordError("Passwords do not match!")
        }

        dispatch(signup(signUpForm, history));
      }

    return (
        <div>
        {page ? (
                <LogIn 
                    name={name} 
                    setName={setName} 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    emailError={emailError}
                    setEmailError={setEmailError}
                    passwordError={passwordError}
                    setPasswordError={setPasswordError}
                    confirmPasswordError={confirmPasswordError}
                    setConfirmPasswordError={setConfirmPasswordError}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    user={user}
                    setUser={setUser}
                    changePagetoSignup={changePagetoSignup}
                    catchErrors={catchErrors}
                    loading={loading}
                    signInForm={signInForm}
                    setSignInForm={setSignInForm}
                    />
        ) : (
                <SignUp 
                    name={name} 
                    setName={setName} 
                    email={email} 
                    setEmail={setEmail} 
                    password={password} 
                    setPassword={setPassword} 
                    confirmPassword={confirmPassword}
                    setConfirmPassword={setConfirmPassword}
                    emailError={emailError}
                    setEmailError={setEmailError}
                    passwordError={passwordError}
                    setPasswordError={setPasswordError}
                    confirmPasswordError={confirmPasswordError}
                    setConfirmPasswordError={setConfirmPasswordError}
                    hasAccount={hasAccount}
                    setHasAccount={setHasAccount}
                    handleLogin={handleLogin}
                    handleSignup={handleSignup}
                    user={user}
                    setUser={setUser}
                    changePagetoLogin={changePagetoLogin}
                    nameError={nameError}
                    setNameError={setNameError}
                    Errors={Errors}
                    setErrors={setErrors}
                    catchErrors={catchErrors}
                    signUpForm={signUpForm}
                    setSignUpForm={setSignUpForm}
                    />
        )}
        </div>
    )

}

export default AccountHandler
