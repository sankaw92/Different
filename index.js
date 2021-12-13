const express=require('express');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const fs = require('fs');
const bodyParser = require('body-parser');

//get data from other files
const getData=require("./getData");
const CalData=require("./calculate");

//Routes
app.use(express.json());
app.use(bodyParser.json());
app.use("/api/product", getData);
app.use("/api/Calculate", CalData); 


//Server listens
app.listen(process.env.PORT||5000, ()=>{
    console.log("Server is running");
});