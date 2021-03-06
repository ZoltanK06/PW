import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

import mongoose from 'mongoose';

import User from '../models/userScheme.js';



export const signin = async (req, res) => {
    const { email, password } = req.body;

    try {
        const existingUser =  await User.findOne({ email });

        if(!existingUser) return res.status(404).json({message: "User doesn't exist"});

        const isPasswordCorrect = await bcrypt.compare(password, existingUser.password);

        if(!isPasswordCorrect) return res.status(400).json({message: "Invalid credentials."});

        const token = jwt.sign( {email: existingUser.email, id: existingUser._id}, 'test' , {expiresIn: "1h"});
    
        res.status(200).json( {result: existingUser, token});
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong.'});
    }
}

export const signup = async (req, res) => {
    const { name, email, password, confirmPassword, type } = req.body;

    try {
        const oldUser = await User.findOne({ email });

        if (oldUser) return res.status(400).json({ message: "User already exists" });

        if(password !== confirmPassword) return res.status(400).json({ message: "Passwords don't match!" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await User.create({name, email, password: hashedPassword, type });

        const token = jwt.sign( { email: result.email, id: result._id }, 'test', { expiresIn: "1h" } );

        res.status(201).json({ result, token });
    } catch (error) {
        res.status(500).json({ message: "Something went wrong" });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getAdmins = async (req, res) => {
    try {
        const admins = await User.find({type: "admin"});
        res.status(200).json(admins);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getSimpleUsers = async (req, res) => {
    try {
        const simple = await User.find({type: "simple"});
        res.status(200).json(simple);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const getUser = async (req, res) => {
    const { id } = req.params;

    try {
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json(error.message);
    }
}

export const deleteUser = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    await User.findByIdAndRemove(id);

    res.json({ message: "User deleted successfully." });
}

export const updateUser = async (req, res) => {
    const { id } = req.params;
    const {name, email, password, type} = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No user with id: ${id}`);

    const updatedUser={name,email, password, type, _id: id};


    await User.findByIdAndUpdate(id, updatedUser, { new: true });

    res.json(updatedUser);
}