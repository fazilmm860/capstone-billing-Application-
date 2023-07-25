const express = require("express");
// const {
//     loginController,
//     registerController,
// } = require("../controllers/userController");

const { signUp, signIn } = require('../controllers/userController');


const router = express.Router();

//routes
//Method - get
// router.post("/login", loginController);
router.post('/signUp', signUp);

//MEthod - POST
// router.post("/register", registerController);
router.post('/signIn', signIn);

module.exports = router;  