import React from 'react'
import Navbar from '../components/NavBar/Navbar';
import Sidebar from '../components/NavBar/Sidebar';
import Bckg from '../images/Home_BCKG3.jpg';
import {BackgroundImg, HomeBox, Button, ButtonLink, Wrapper} from '../Styles/Home.style';
import {useDispatch, useSelector} from 'react-redux'
import {useEffect, useState} from 'react'
import { deleteCartItems } from '../actions/cartPrograms';
import {app} from '../firebase-config'
import { useHistory } from 'react-router';


function Home() {

    const dispatch = useDispatch();
    const [user, setUser] = useState("");

    const authListener = () => {
        app.auth().onAuthStateChanged(user => {
            if(user) {
                setUser(user);
            }else{
                setUser('');
            }
        })
    }
  
   
    useEffect(() => {
        dispatch(deleteCartItems());
        authListener();
    }, [dispatch])
    
    return (
        <BackgroundImg style={{backgroundImage: `url(${Bckg})`}}>
            <Wrapper>
                <HomeBox>
                         <h1>Start building a better YOU today!</h1>
                         <p>
                             Nothing is given, everything is earned. If you are trying to find yourself, well bad news, you won't. You can only build yourself.
                             No matter where you are in your training journey, we have the right program for you, and even if you find the gym environment daunting
                             at first, we ensure that soon it will feel like home. Training is not easy, but nothing valuable is, our goal is to at least make it simple.
                             Hop on if you are ready for the ride, your body, mind and spirit will thank both you and us later!
                         </p>
                        <Button>
                        <ButtonLink to="/Shop">Go to store</ButtonLink>
                    </Button>
                </HomeBox>
            </Wrapper>
        </BackgroundImg>
        
    )
}

export default Home
