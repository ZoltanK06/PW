import React from 'react'
import {Nav, NavLink, Bars, NavMenu, NavBtn, NavBtnLink, Logo, BarContainer, CartLogo} from './Navbar.style'
// import { GiMuscleUp } from 'react-icons/gi'
import {useAuth} from '../../Pages/AccountHandler'
import {useSelector, useDispatch} from 'react-redux';
import {useState, useEffect} from 'react'
import { getCartPrograms, deleteCartItems } from '../../actions/cartPrograms'


function Navbar( {user, changeState_Sbar, handleLogOut}) {

    const dispatch = useDispatch();
    const cartPrograms = useSelector((state) => state.cartPrograms);

    useEffect(() => {
        dispatch(getCartPrograms());
      }, [dispatch])
    
    return (
        <Nav>
            <NavLink to='/'>
                <Logo />    {/* <GiMuscleUp style={{color: '#92DCE5', fontSize: '50px'}} /> */}
            </NavLink>

            <BarContainer onClick={changeState_Sbar} >
                    <Bars />
            </BarContainer>

            <NavMenu>
                <NavLink to='/Shop' activeStyle>Shop</NavLink>
                <NavLink to='/Aboutus' activeStyle>About Us</NavLink>
                <NavLink to='/Contact' activeStyle>Contact Us</NavLink>
                <NavLink to='/Featured' activeStyle>Featured</NavLink>
                <NavLink to='/Cart' > 
                    <CartLogo />{cartPrograms.length !== 0 ? (<h4> ({cartPrograms.length}) </h4>) : (<></>)} 
                </NavLink>
                
                { user ? (
                    <NavBtn> 
                        <NavBtnLink onClick={handleLogOut} to="/LogIn">Log Out</NavBtnLink>
                    </NavBtn>
                ) : (
                    <NavBtn>
                        <NavBtnLink to='/LogIn'>Sign In</NavBtnLink>
                    </NavBtn>
                )}  
            </NavMenu>
           
            
           
        </Nav>
        
    )
}

export default Navbar
