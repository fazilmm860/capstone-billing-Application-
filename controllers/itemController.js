const itemModel = require('../models/itemModel');

//get-items
const getItemController = async (req, res) => {
    try {
        const items = await itemModel.find();
        res.status(200).json(items);
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
};

//add-items
const addItemController = async (req, res) => {
    try {
        const newItem = new itemModel(req.body)
        await newItem.save();
        res.status(201).json(newItem)
    }
    catch (err) {
        res.status(404).json({ message: error.message })
    }
}
module.exports = { getItemController, addItemController };