const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/config');
const itemModel = require('./models/itemModel');
const items = require('./utils/data')

//config
dotenv.config();
connectDB()

// function Seeder
const importData = async () => {
    try {
        await itemModel.deleteMany()
        const itemsData = await itemModel.insertMany(items)
        console.log(`All items added`.bgGreen);
        process.exit();
    }
    catch (error) {
        console.log(`${error}`.bgRed.inverse);
        process.exit(1);
    }
}

importData();
