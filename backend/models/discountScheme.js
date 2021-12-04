import  mongoose  from "mongoose";

const discountSchema = mongoose.Schema(
    {
        percentage: Number,
        code: String
    }
);

const Discount = mongoose.model('Discount', discountSchema);

export default Discount;