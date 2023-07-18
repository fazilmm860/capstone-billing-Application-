const express = require('express');
const { getItemController, addItemController, editItemController, deleteItemController } = require('../controllers/itemController');

const router = express.Router();

//routes
//Method -get
router.get("/get-item", getItemController);

//Method-post
router.post("/add-item", addItemController);

//method-Put
router.put("/edit-item", editItemController);

//method-delete
router.post("/delete-item", deleteItemController);

module.exports = router;        