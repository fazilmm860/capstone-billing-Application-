const userModal = require('../models/userModel');

//Login User
const loginController = async (req, res) => {
    try {
        const { userId, password } = req.body
        const user = await userModal.findOne({ userId, password, verified: true });
        res.status(200).json(user);
    } catch (error) {

        res.status(404).json({ message: error.message })
    }
};

//Register User
const registerController = async (req, res) => {
    try {
        const newUser = new userModal(req.body);

        await newUser.save();
        res.status(201).json('new User added succesfully')
    }
    catch (err) {
        res.status(404).json({ message: error.message })
    }

}



module.exports = { loginController, registerController };