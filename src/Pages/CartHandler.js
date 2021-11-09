import React from 'react'
import Shop from './Shop'
import Cart from './Cart'
import {app} from '../firebase-config'
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router'
import {getPrograms, setCartPrograms} from '../actions/programs'
import { getCartPrograms, deleteCartItems } from '../actions/cartPrograms'
import {useSelector, useDispatch} from 'react-redux';
import {ProgramsContainer, ProgramsHeading, ProgramWrapper, ButtonBox, ProgramButton} from '../Styles/Shop.style'
import {useLocation} from 'react-router-dom'


function CartHandler() {

const location = useLocation();

const dispatch = useDispatch();
  const programs = useSelector((state) => state.programs);
  const cartPrograms = useSelector((state) => state.cartPrograms);

useEffect(() => {
    dispatch(getPrograms());
    dispatch(getCartPrograms());
    console.log(cartPrograms);
}, [dispatch])


const clearCart = () => {
    dispatch(deleteCartItems()); 
    dispatch(getCartPrograms());
    console.log("Im trying");
}
    
    return (
        <>
        {(location.pathname === '/Shop') ? (
            <ProgramsContainer>
            <ProgramsHeading>Programs</ProgramsHeading>
            <ProgramWrapper>
            {programs.map((program) => (
            <Shop key={program.id} program={program}/>
            ))}
             </ProgramWrapper>
            </ProgramsContainer>
        ) : (
            <ProgramsContainer>
            <ProgramsHeading>Cart</ProgramsHeading>
            <ProgramWrapper>
            {cartPrograms.map((program) => (
             <Cart  key={program.id} program={program}> </Cart>
             ))}
            </ProgramWrapper>
                 <ButtonBox>
                  <ProgramButton onClick={clearCart} >Clear Cart!</ProgramButton>
                </ButtonBox>
            </ProgramsContainer>
        )}
        </>
    )
}

export default CartHandler
