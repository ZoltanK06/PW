import Message from '../models/messageScheme.js'
import mongoose from 'mongoose'

export const getMessages = async (req, res) => {
    try {
        const messages = await Message.find();

        res.status(200).json(messages);

    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addMessage = async (req, res) => {
    const message = req.body;

    const newMessage = new Message(message);

    try {
        await newMessage.save();
        res.status(201).json(newMessage);

    } catch (error) {

        res.status(409).json({message: error.message});
        
    }
}