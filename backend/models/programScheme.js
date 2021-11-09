import  mongoose  from "mongoose";

const programSchema = mongoose.Schema(
    {
        number: Number,
        name: String,
        desc: String,
        price: Number,
        filters: [String],
        image: String,
        button: String,
        state: String
    }
);

const Program = mongoose.model('Program', programSchema);

export default Program;
