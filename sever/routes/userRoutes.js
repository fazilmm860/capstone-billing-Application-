const express = require("express");
// const {
//     loginController,
//     registerController,
// } = require("../controllers/userController");

const { signUp } = require('../controllers/userController');
const signIn = require('../controllers/loginController')


const router = express.Router();

//routes
//Method - get
// router.post("/login", loginController);
router.post('/signUp', signUp);

//MEthod - POST
// router.post("/register", registerController);
router.post('/signIn', signIn);

module.exports = router;  