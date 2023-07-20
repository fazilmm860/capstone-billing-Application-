const mongoose = require('mongoose');

require('colors');


//connectDB function

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB Connected : ${conn.connection}`.bgYellow);
    }
    catch (error) {
        console.log(`Error Message: ${error.message}`.bgRed);
        process.exit(1);
    }


};

// export
module.exports = connectDB;
