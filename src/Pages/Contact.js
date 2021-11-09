import React from 'react'
import Bckg from '../images/ContactUs_img.jpg'
import {ContactContainer, ContactHeader, ContactBox, Inputs, Input, MessageInputs, MessageInput, Button, ButtonLink, Logo, ContactBottom, ContactBottomItem, ContactLogo, ContactLogo1, ContactLogo2} from '../Styles/ContactUs.style'
import FileBase from 'react-file-base64';
import {useState, useEffect} from 'react'
import { addMessage } from '../actions/messages';
import {useDispatch} from 'react-redux'


function Contact() {
    
    const [messageData, setMessageData] = useState({name: '', email: '', message: '', selectedFile: '', state: 'pending'});

    const [nameError, setNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [messageError, setMessageError] = useState('');

    const dispatch = useDispatch();

    const clearErrors = () => {
        setNameError('');
        setEmailError('');
        setMessageError('');
    }

    useEffect(() => {
        clearErrors();
    }, [])

    const handleSubmit = () => {
        clearErrors();

        if(messageData.name.length === 0){
           return setNameError("Please introduce a valid name!");
        }

        if(messageData.email.length === 0){
            return setEmailError("Please introduce a valid email!");
        }

        if(messageData.message.length === 0){
            return setMessageError("Please complete this field too!");
        }

        dispatch(addMessage(messageData));
        document.location.reload(true);
        return false;
    }

    return (
        <ContactContainer style={{backgroundImage: `url(${Bckg})`}}>
            <ContactHeader to="/"> <Logo /> </ContactHeader>
            <ContactBox>
                <h2>Send us a message!</h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <Inputs>
                        <label htmlFor="contact-name">Full Name</label>
                        <Input type="text" placeholder="Full Name" id="contact-name" value={messageData.name} onChange={(e) => setMessageData({ ...messageData, name: e.target.value })}/>
                        <p>{nameError}</p>
                    </Inputs>
                    <Inputs>
                        <label htmlFor="contact-email">Email Address</label>
                        <Input type="text" placeholder="name@email.com" id="contact-email" value={messageData.email} onChange={(e) => setMessageData({ ...messageData, email: e.target.value })}/>
                        <p>{emailError}</p>
                    </Inputs>
                    <MessageInputs>
                        <label htmlFor="message">Message</label>
                        <MessageInput type="text" placeholder="Message" id="contact-message" value={messageData.message} onChange={(e) => setMessageData({ ...messageData, message: e.target.value })}></MessageInput>
                        <p>{messageError}</p>
                        <div style={{marginTop:"25px"}}><FileBase type="file" multiple={false} onDone={({ base64 }) => setMessageData({ ...messageData, selectedFile: base64 })} /></div>
                    </MessageInputs>
                    <Button onClick={handleSubmit}>
                        <ButtonLink to='/Contact'>Submit</ButtonLink>
                    </Button>
                </form>
            </ContactBox>
            <ContactBottom>
                <ContactBottomItem> 
                    <ContactLogo2> </ContactLogo2>
                    <h6> Address: HealthIsland, number #1 </h6>
                </ContactBottomItem>
                <ContactBottomItem> 
                    <ContactLogo> </ContactLogo>
                    <h6> Tel: 0770831161 </h6>
                </ContactBottomItem>
                <ContactBottomItem> 
                    <ContactLogo1> </ContactLogo1>
                    <h6> Email: healthlab@gmail.com </h6>
                </ContactBottomItem>
            </ContactBottom>
        </ContactContainer>
    )
}

export default Contact
