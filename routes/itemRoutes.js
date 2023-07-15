const express = require('express');
const { getItemController, addItemController, editItemController } = require('../controllers/itemController');

const router = express.Router();

//routes
//Method -get
router.get("/get-item", getItemController);

//Method-post
router.post("/add-item", addItemController);

//method-Put
router.put("/edit-item", editItemController);

module.exports = router;        