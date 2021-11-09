import mongoose from "mongoose";
import Program from './programScheme.js'

const orderSchema = mongoose.Schema(
    {
        buyer_email: String,
        value: Number,
        program_name: [String]
    }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;