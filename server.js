const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
require('colors');


const connectDB = require('./config/config')
//routes import

//dotenv config
dotenv.config();
//db config
connectDB();
//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan("dev"));

//routes
app.use("/api/items", require("./routes/itemRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

//port
const PORT = process.env.PORT || 8080
//listen
app.listen(PORT, () => {
    console.log(`Server Running on Port ${PORT}`.bgCyan.white);
})      