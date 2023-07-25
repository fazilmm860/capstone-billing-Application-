const Joi = require('joi');
const { User, } = require('../models/userModel');
const bcrypt = require('bcrypt');


const signIn = async (req, res) => {
    try {
        const { error } = validate(req.body)
        if (error)
            return res.status(400).send({ message: error.details[0].message })

        const user = await User.findOne({ userId: req.body.userId })
        if (!user)
            return res.status(401).send({ message: "Invalid User ID" })

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Password" })

        const token = user.generateAuthToken();
        res.status(200).send({
            data: token, message: "Logged in Successfully"
        })


    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" })
        console.log(error);

    }
}
const validate = (data) => {
    const schema = Joi.object({
        userId: Joi.string().required().label("User ID"),
        password: Joi.string().required().label("Password")
    })
    return schema.validate(data)
}

module.exports = signIn;