import Program from "../models/programScheme.js"
import Cart from "../models/cartScheme.js"
import mongoose from 'mongoose'

export const getCartItems = async (req, res) => {
    try {
        const cartItems = await Cart.find();

        res.status(200).json(cartItems);
        
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

export const addCartItem = async (req, res) => {
    const cartItem = req.body;

    const newCartItem = new Cart(cartItem);
   
    try {
        await newCartItem.save();
        res.status(201).json(newCartItem);
        
    } catch (error) {
        res.status(409).json({message: error.message});
    }
}

export const deleteCartItems = async (req, res) => {
    try {
        await Cart.deleteMany({button: 'Add to cart'});
    } catch (error) {
        console.log(error.message);
    }
}

export const deleteCartItem = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No cart item with id: ${id}`);

    await Cart.findByIdAndRemove(id);

    res.json({ message: "Cart item deleted successfully." });
}