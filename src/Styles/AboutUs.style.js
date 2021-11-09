import styled from "styled-components"
import Photo from '../images/AboutUs_img.jpg'

export const Container = styled.div`
    width: 100%;
    padding: 78px 0px;
    background-color: #191919;

    @media screen and (max-width: 768px){
        height: 140vh;
    }
`

export const Wrapper = styled.div`
    width: 1130px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    @media screen and (max-width: 768px) {
        padding-bottom: 65px;
        width: 418px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }
`

export const Image = styled.img`
    height: 550px;
    width: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 768px){
        height: 500px;
        width: 350px;
        margin-left: 38px;
    }
`

export const TextWrapper = styled.div`
    width: 650px;

    @media screen and (max-width: 768px) {
        width: 350px;
        margin-left: 38px;
    }

    h1 {
        color: white;
        font-size: 60px;
        text-transform: capitalize;
        margin-bottom: 20px;
        text-align: justify;
        box-shadow: 0px 5px #D64933;

        @media screen and (max-width: 768px) {
            font-size: 45px;
        }

    }

    p {
        color: white;
        font-size: 15px;
        margin-bottom: 24px;
        letter-spacing: 2px;
        text-align: justify;
        text-indent: 50px;

        @media screen and (max-width: 768px) {
            font-size: 14px;
            letter-spacing: 0.8px;
            margin-bottom: 10px;
        }
    }
`

