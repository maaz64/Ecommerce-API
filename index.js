const express = require('express');
const app = express();
const Port = 80;
const db = require('./Config/mongodb');


app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/',require('./Routes/index'));

app.listen(Port,(error)=>{
    if(error){
        console.log("Erroe in running the server");
        return;
    }
    console.log(`Server is up and running on port ${Port}`);
})