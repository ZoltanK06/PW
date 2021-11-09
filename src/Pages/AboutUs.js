import React from 'react'
import {Container, Wrapper, Image, TextWrapper} from '../Styles/AboutUs.style'
import Photo from '../images/AboutUs_img.jpg'


function SignIn() {
    return (
        <Container>
            <Wrapper>
                <Image style={{backgroundImage: `url(${Photo})`}}/>
                <TextWrapper>
                    <h1>About Us</h1>
                    <p>We are a group of trainers who want to help you achieve your training related goals and at the same time simplify the process.
                        Training is not easy, it takes sweat and tears to achieve your dream body or peak performance, but at least we could make it less complicated.
                        No matter where you are at right now, you could be a beginner or you could've trained for the last decade we still can help you create a new routine
                        or change up for the better the old one. We thought about everything, no matter your age, your gender or your disponibility, we can give you a program
                        that will ensure that you quit wishing and actually start acting and striving for what is supposed to be yours. Two things we cannot provide, one being
                        the goal itself, the other the dedication, but you can trust us once you start working with us, your entire being will shift for the better and those
                        two things you will give yourself as the best gifts you'll ever recieve!
                         </p>
                </TextWrapper>
            </Wrapper>
        </Container>    
    )
}

export default SignIn
