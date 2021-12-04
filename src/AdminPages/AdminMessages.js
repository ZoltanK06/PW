import React from 'react'
import {useState, useEffect} from 'react'
import { getMessages, deleteMessage, updateMessage } from '../actions/messages'
import {useSelector, useDispatch} from 'react-redux';
import {useHistory} from 'react-router'
import {
    MessagesContainer,
    MessagesWrapper,
    MessagesHeading,
    Wrapper,
    MessageList,
    MessageBox,
    MessageImage,
    MessageInfo,
    MessageID,
    ClientName,
    ClientDesc,
    RemoveButton,
    MessageStatus,
    UpdateButton,
    ButtonBox,

    } from './AdminMessages.style'


function AdminMessages() {

    const dispatch = useDispatch();    
    const messages = useSelector((state) => state.messages);

    useEffect(() => {
        dispatch(getMessages());
    }, [dispatch])

    return (
    <MessagesContainer>
        <MessagesWrapper>
            <MessagesHeading> YOUR CLIENTS MESSAGES </MessagesHeading>

            <Wrapper>
                <MessageList>
                    {messages.map((msg) => (
                        <MessageBox>
                            <MessageImage src={msg.selectedFile} alt={msg.alt} />
                            <MessageInfo>
                                <MessageID> <b>ID: </b> {msg._id}</MessageID>
                                <ClientName><b>Name:</b>  {msg.name} </ClientName>
                                <ClientDesc> <b>Description:</b>  {msg.message}</ClientDesc>
                                <MessageStatus> <b>Status:</b> {msg.state} </MessageStatus>
                            </MessageInfo>
                            <ButtonBox>
                                <RemoveButton onClick={() => {
                                    dispatch(deleteMessage(msg._id));
                                }}>Remove message</RemoveButton>
                                { msg.state == 'accepted' ? (
                                    <UpdateButton onClick={() => (
                                        dispatch(updateMessage(msg._id, {name: msg.name, email: msg.email, message: msg.message, selectedFile: msg.selectedFile, state: 'pending'})
                                    ))}>Update status</UpdateButton>
                                ) : (
                                    <UpdateButton onClick={() => (
                                        dispatch(updateMessage(msg._id, {name: msg.name, email: msg.email, message: msg.message, selectedFile: msg.selectedFile, state: 'accepted'})
                                    ))}>Update status</UpdateButton>
                                )}
                                
                            </ButtonBox>
                        </MessageBox>
                    ))}
                </MessageList>
            </Wrapper>

        </MessagesWrapper>
    </MessagesContainer>
    
        );
}

export default AdminMessages
