import mongoose from 'mongoose'

const adminSchema = mongoose.Schema(
    {
        mail: String
    }
);

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;