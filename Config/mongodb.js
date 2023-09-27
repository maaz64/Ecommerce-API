const mongoose = require('mongoose');
require('dotenv').config();

const Mongo_Url = process.env.Mongo_Url; 

mongoose.connect(Mongo_Url).then(()=>{
    console.log("Connected to database successfully");
}).catch((err)=>{
    console.log("Error in connecting database",err);
});