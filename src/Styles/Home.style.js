import styled from "styled-components";
import { Link } from "react-router-dom";

export const BackgroundImg = styled.div`
    width: 100%;
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: left;
    flex-direction: column;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    h1 {
        color: #fff;
    }

    @media screen and (max-width: 768px) {
        height: 110vh;
    }
`

export const HomeBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;
    background: transparent;

    h1 {
        font-size: clamp(1.25rem, 5vw, 2.5rem);
        margin-bottom: 1rem;
        box-shadow: 3px 5px #D64933;
        letter-spacing: 3px;
        color: #EEE5E9;
    }

    p {
        font-size: clamp(0.75rem, 1vw, 1.25rem);
        margin-bottom: 2rem;
        text-align: justify;
        text-indent: 50px;   
        line-height: 1.5;  
        color: #EEE5E9; 
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
        width: 418px;
    }
`

export const Button = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 24px;
    padding: 0 1rem;  

    a {
        font-size: 15px;
        font-weight: 500;
        font-family: 'Calibri';
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

    &:hover {
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`

export const Wrapper = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    padding: 0rem calc((100vw - 1300px) / 2);
}       
`