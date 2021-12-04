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

export const deleteMessage = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No message with id: ${id}`);

    await Message.findByIdAndRemove(id);

    res.json({ message: "Message deleted successfully." });
}

export const updateMessage = async (req, res) => {
    const { id } = req.params;
    const {name, email, message, selectedFile, state} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No message with id: ${id}`);

    const updatedMessage={name,email, message, selectedFile, state, _id: id};


    await Message.findByIdAndUpdate(id, updatedMessage, { new: true });

    res.json(updatedMessage);
}