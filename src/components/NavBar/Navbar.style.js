import styled from 'styled-components'
import { NavLink as Link} from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { GiMuscleUp } from 'react-icons/gi'
import {AiOutlineShoppingCart} from 'react-icons/ai'

export const Nav = styled.nav`  
    background: #000000;
    height: 80px;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1450px) / 2);
    z-index: 100;
`

export const NavLink = styled(Link)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    justify-content: space-between;
    align-items: center;


&.active {
    color: #7C7C7C

    .h4{
        color: white;
    }
}
`

export const BarContainer = styled.div``

export const Bars = styled(FaBars)`
    display: none;    
    transition: 0.2s ease-in-out;   
    color: #92DCE5;

    @media screen and (max-width: 760px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 250%);
        front-size: 1.8rem;
        cursor: pointer;
    }

    &:hover {
        transition: 0.2s ease-in-out;   
        color: #fff;
    }
`

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;

    @media screen and (max-width: 760px) {
        display: none;
    }
`

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 0 1rem;

    @media screen and (max-width: 760px){
        display: none;
    }
`

export const NavBtnLink = styled(Link)`
    border-radius: 4px;
    background: #92DCE5;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const CartLogo = styled(AiOutlineShoppingCart)`
    color: #fff;
    fontSize: 10px;
    height: 25px;
    width: 25px;
`

export const Logo = styled(GiMuscleUp)`
    color: #92DCE5;
    fontSize: 50px;
    height: 75px;
    width: 50px;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
}
`