const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.listen(5000,()=>{
    console.log('Sever is Running on the https://localhost:5000');
})

const connectDB = require('db.js');
connectDB();
app.get('/',(req,res)=>{
    app.render('Values Fetched');
})
