import React from 'react'
import { useState, useEffect, useContext } from 'react';
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword} from 'firebase/auth';
import {app} from '../firebase-config';
import LogIn from './LogIn'
import SignUp from './SignUp'
import { GiBatteryPackAlt } from 'react-icons/gi';
import { useHistory } from 'react-router';

function AccountHandler() {

    // Fields:
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

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
    const history = useHistory();
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
        
        try{
            clearErrors();
            setLoading(true)
            await app.auth().signInWithEmailAndPassword(email, password)
            history.push("/")
          } catch (error){
              if(error.code === 'auth/invalid-email'){
                  setEmailError(error.message);
              }else if(error.code === 'auth/user-not-found'){
                setEmailError(error.message);
              }else if(error.code === 'auth/invalid-password'){
                  setPasswordError(error.message);
              }else{setPasswordError("Introduce a valid password!")}
          }
    }

    async function handleSignup(e) {
        e.preventDefault()
        clearErrors();


        if (name === ''){
            return setNameError("Please introduce a valid name!")
        }

        if (password.length < 6){
            return setPasswordError("Password must be at least 6 characters long!")
        }

        if (password !== confirmPassword) {
           return setConfirmPasswordError("Passwords do not match!")
        }
    
        try {
          clearErrors();
          setLoading(true)
          await app.auth().createUserWithEmailAndPassword(email, password)
          history.push("/")
        } catch(error) {
            switch(error.code){
                case "auth/email-already-exists":
                    setEmailError(error.message);
                    break;
                case "auth/invalid-email":
                    setEmailError(error.message);
                    break;
            }
           
        }
    
        setLoading(false)
      }



    const handleLogOut = () => {
        app.auth().signOut();
    }

    const authListener = () => {
        app.auth().onAuthStateChanged(user => {
            if(user) {
                clearInputs();
                setUser(user);
                setLoading(false); 
            }else{
                setUser('');
            }
        })
    }
    
    useEffect(() => {
        authListener();
    }, [])

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
                    handleLogOut={handleLogOut}
                    handleSignup={handleSignup}
                    user={user}
                    setUser={setUser}
                    changePagetoSignup={changePagetoSignup}
                    catchErrors={catchErrors}
                    loading={loading}
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
                    handleLogOut={handleLogOut}
                    handleSignup={handleSignup}
                    user={user}
                    setUser={setUser}
                    changePagetoLogin={changePagetoLogin}
                    nameError={nameError}
                    setNameError={setNameError}
                    Errors={Errors}
                    setErrors={setErrors}
                    catchErrors={catchErrors}
                    />
        )}
        </div>
    )

}

export default AccountHandler
