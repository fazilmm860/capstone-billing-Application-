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

//update Item
const editItemController = async (req, res) => {
    try {
        const { itemId } = req.body;
        console.log(itemId);
        await itemModel.findOneAndUpdate({ _id: itemId }, req.body, {
            new: true,
        })
        res.status(201).json("item updated")
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

// Delete Item
const deleteItemController = async (req, res) => {
    try {
        const { itemId } = req.body;
        await itemModel.findOneAndDelete({ _id: itemId })

        res.status(200).json('Item Deleted')
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
}

module.exports = { getItemController, addItemController, editItemController, deleteItemController };