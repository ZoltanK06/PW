import React from "react";
import styled from "styled-components";
import {FcPrevious, FcNext} from 'react-icons/fc'

export const FeaturedContainer = styled.div`
    width: 100%;
    padding: 78px 0px;
    background-color: #191919;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 768px){
        height: 140vh;
    }
`

export const FeaturedSlideShow=styled.div`
    width: 70%;
    height: 600px;
    background-color: black;
    margin-left: 220px;
    margin-top: 50px;
    border-radius: 50px;
    box-shadow: 0px 2px 15px #D64933;
`


export const FeaturedWrap = styled.div`
    height: 100%;
    width: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Previous = styled(FcPrevious)`
    color: white;
    fontSize: 20px;
    height: 40px;
    width: 70px;
    margin-right: 50px;
`

export const Next = styled(FcNext)`
    color: white;
    fontSize: 20px;
    height: 40px;
    width: 70px;
    margin-left: 50px;
`

export const ClientImg = styled.img`
    width: 300px;
    height: 450px;
    border-radius: 10px;
    margin-right: 150px;
`

export const ClientInfo = styled.div`
    width: 500px;
    display: grid;
`

export const ClientName = styled.h1`
    color: white;
    font-size: 40px;
    box-shadow: 0px 2px #D64933;
`

export const Review = styled.h6`
    color: white;
    font-size: 15px;
    text-indent: 25px;
    text-align: justify;
`