// const userModal = require("../models/userModel");

// // login user
// const loginController = async (req, res) => {
//     try {
//         const { userId, password } = req.body;
//         const user = await userModal.findOne({ userId, password, verified: true });
//         if (user) {
//             res.status(200).send(user);
//         } else {
//             res.json({
//                 message: "Login Fail",

//             });
//         }
//     } catch (error) {
//         console.log(error);
//     }
// };

// //register
// const registerController = async (req, res) => {
//     try {
//         const newUser = new userModal({ ...req.body, verified: true });
//         await newUser.save();
//         res.status(201).send("new User added Successfully!");
//     } catch (error) {
//         res.status(400).send(error);
//         console.log(error);
//     }
// };

// module.exports = {
//     loginController,
//     registerController,
// };
const Joi = require('joi');
const { User, validate } = require('../models/userModel');
const bcrypt = require('bcrypt');

const signUp = async (req, res) => {
    try {
        const { error } = validate(req.body);
        if (error)
            return res.status(400).send({ message: error.details[0].message })

        const user = await User.findOne({ userId: req.body.userId })
        if (user)
            return res.status(409).send({ message: "User ID already exist" })

        const salt = await bcrypt.genSalt(Number(process.env.SALT))
        const hashpassword = await bcrypt.hash(req.body.password, salt)

        const newUser = await new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            userId: req.body.userId,
            password: hashpassword
        })
        newUser.save();
        res.status(201).send({ message: "User Created" })
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
        console.log(error);
    }
}



module.exports = { signUp }