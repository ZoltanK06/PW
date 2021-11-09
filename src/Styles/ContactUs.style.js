import React from "react"
import styled from "styled-components"
import { Link } from "react-router-dom"
import { GiMuscleUp } from "react-icons/gi"
import {MdPlace} from "react-icons/md"
import {HiMail} from "react-icons/hi"
import {BsFillTelephoneFill} from "react-icons/bs"

export const ContactContainer = styled.div`
    width: 100%;
    height: 130vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 768px){
        width: 483px;
    }
`

export const ContactHeader = styled(Link)`
    font-size: 2rem;
    font-weight: 600;
    margin: 40px 0;
    color: inherit;
`

export const Logo = styled(GiMuscleUp)`
    color: #92DCE5;
    fontSize: 50px;
    height: 75px;
    width: 50px;
    margin-top: 80px;
    transition: all 0.2s ease-in-out;

    &:hover {
    transition: all 0.2s ease-in-out;
    color: #fff;
}
`

export const ContactBox = styled.div`
    width: 100%;
    max-width: 450px;
    border-radius: 5px;
    padding: 50px;
    margin-bottom: 100px;
    background-color: #fff;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    text-align: center;

    h2 {
        font-weight: 500;
        margin-bottom: 50px;
    }

    span {
        display: block;
        margin-top: 40px;
        color: #888888;
        font-size: 14px;
    }

    a{
        margin-left: 4px;
        color: #2f8bfd;
    }

    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const Input = styled.input`
    width: 100%;
    outline: none;
    padding: 8px 16px;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    font-size: 1rem;
    color: #7C7C7C;
    transition: box-shadow 0.2s;
    
    &::placeholder {
        color: #dedede;
    }

    &:focus {
        box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5); 
    }
`

export const Inputs = styled.div`
    margin-bottom: 24px;
    text-align: left;
    width: 410px;

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: #888888;
    }

    p{
        color: red;
        font-size: 12px;
    }

    @media screen and (max-width: 768px){
        width: 320px;
    }
`

export const MessageInputs = styled.div`
    margin-bottom: 48px;
    text-align: left;
    width: 410px;

    label {
        display: inline-block;
        margin-bottom: 0.5rem;
        color: #888888;
    }
    
    p{
        color: red;
        font-size: 12px;
    }

    @media screen and (max-width: 768px){
        width: 320px;
    }
`

export const MessageInput = styled.textarea`
    width: 100%;
    outline: none;
    height: 90px;
    padding: 8px 16px;
    border: 1px solid #e0e6e8;
    border-radius: 4px;
    font-size: 1rem;
    color: #7C7C7C;
    transition: box-shadow 0.2s;
    resize: none;
    
    &::placeholder {
        color: #dedede;
        font-family: 'Arial';
    }

    &:focus {
        box-shadow: 0 0 0 2px rgb(169, 172, 255, 0.5); 
    }
`

export const Button = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 0 1rem;
    width: 405px;

    a {
        color: #000;
    }


    @media screen and (max-width: 768px){
        width: 310px;
    }
`

export const ButtonLink = styled(Link)`
    border-radius: 4px;
    background: #92DCE5;
    padding: 10px 22px;
    color: #000;
    border: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    width: 410px;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }

    @media screen and (max-width: 768px){
        width: 350px;
    }
`

export const ContactBottom = styled.nav`
    height: 80px;
    width: 198.7vh;
    display: flex;
    justify-content: space-between;
    padding: 0.5rem calc((100vw - 1450px) / 2);
    z-index: 100;
    background: black;

    @media screen and (max-width: 768px){
        width: 483px;
        display: flex;
        flex-direction: left;
        justify-content: center;
    }
`

export const ContactBottomItem = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 48px;

    h6{
        font-size: 20px;
        color: white;

        @media screen and (max-width: 768px){
            font-size: 8px;
            padding: 0px 1px;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
`

export const ContactLogo = styled(BsFillTelephoneFill)`
    color: #92DCE5;
    padding: 8px 12px;
    height: 40px;
    width: 40px;

    @media screen and (max-width: 768px){
        height: 15px;
        width: 15px;
        padding: 4px 6px;
    }
`

export const ContactLogo1 = styled(HiMail)`
    color: #92DCE5;
    padding: 8px 12px;
    height: 40px;
    width: 40px;
    
    @media screen and (max-width: 768px){
        height: 15px;
        width: 15px;
        padding: 4px 6px;
    }
`

export const ContactLogo2 = styled(MdPlace)`
    color: #92DCE5;
    padding: 8px 12px;
    height: 40px;
    width: 40px;

    @media screen and (max-width: 768px){
        height: 20px;
        width: 20px;
        padding: 4px 6px;
    }
`