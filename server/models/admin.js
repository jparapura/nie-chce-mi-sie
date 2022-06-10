import mongoose from 'mongoose';

const adminSchema = mongoose.Schema({
    adminId: String
});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;
