import Discount from '../models/discountScheme.js'
import mongoose from 'mongoose'

export const getDiscounts = async (req,res) => {
    try {
        const discounts = await Discount.find();

        res.status(200).json(discounts);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const deleteDiscount = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No discount item with id: ${id}`);

    await Discount.findByIdAndRemove(id);

    res.json({ message: "Discount item deleted successfully." });
}

export const addDiscount = async (req, res) => {
    const discount = req.body;

    const newDiscount = new Discount(discount);
   
    try {
        await newDiscount.save();
        res.status(201).json(newDiscount);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}