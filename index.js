const express = require('express');
const app = express();
const Port = 80;
const db = require('./Config/mongodb');

// using this middleware to decode forms data if its urlencoded
app.use(express.urlencoded({extended:true}));
// using this middleware to decode forms data if the data is in json format
app.use(express.json());

// general routes for every url
app.use('/',require('./Routes/index'));

// listening the server 
app.listen(Port,(error)=>{
    if(error){
        console.log("Erroe in running the server");
        return;
    }
    console.log(`Server is up and running on port ${Port}`);
})