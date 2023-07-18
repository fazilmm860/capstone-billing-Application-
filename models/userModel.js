const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true

    },
    verified: {
        type: Boolean
    }
})
const Users = mongoose.model("User", userSchema)

module.exports = Users