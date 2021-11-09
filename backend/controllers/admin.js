import Admin from '../models/adminScheme.js'
import mongoose from 'mongoose'

export const getAdmins = async (req,res) => {
    try {
        const admins = await Admin.find();

        res.status(200).json(admins);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addAdmin = async (req, res) => {
    const admin = req.body;

    const newAdmin = new Admin(admin);
   
    try {
        await newAdmin.save();
        res.status(201).json(newAdmin);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}