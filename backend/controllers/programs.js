import programs from "../data/Programs.js"
import Program from "../models/programScheme.js"

export const getPrograms = async (req, res) => {

    try {
        const programs = await Program.find();

        res.status(200).json(programs);

        // const newItem1 = new Program(programs[0]);
        // const newItem2 = new Program(programs[1]);
        // const newItem3 = new Program(programs[2]);
        // const newItem4 = new Program(programs[3]);
        // const newItem5 = new Program(programs[4]);
        // const newItem6 = new Program(programs[5]);

        // await newItem1.save();
        // await newItem2.save();
        // await newItem3.save();
        // await newItem4.save();
        // await newItem5.save();
        // await newItem6.save();
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}

// export const addPrograms = async (req, res) => {
//     try {
//         await new Program(programs).save();
//     } catch (error) {
//         res.status(404).json({message: error.message});
//     }
// }