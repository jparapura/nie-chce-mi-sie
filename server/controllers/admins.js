import mongoose from "mongoose";
import Admin from "../models/admin.js";

export const checkIfAdmin = async (req, res) => {
    const { id } = req.params;

    if (mongoose.Types.ObjectId.isValid(id) == false) {
        return res.status(404).send('No user with given id.');
    }

    const admin = await Admin.findOne({ adminId: id });

    if (admin) return res.status(200).json({ message: 'This is an admin account.' });

    return res.status(200).json({ message: 'This is not an admin account.' });
}
