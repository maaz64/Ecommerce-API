// setting up mongodb cloud database
const mongoose = require('mongoose');
require('dotenv').config();

// importing the momgodb url from .env file
const Mongo_Url = process.env.Mongo_Url; 

// connecting to database
mongoose.connect(Mongo_Url).then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Error in connecting database",err);
});