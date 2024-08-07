const mongoose = require('mongoose');
const { type } = require('os');
const localDB = "mongodb+srv://Shyam:ShyamSunder@cluster0.gfsm3tu.mongodb.net/LoginSignUpTutorial";


const connectDB = async()=>{
    await Mongoose.connect(localDB,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    console.log("MongoDB Connected Successfully");
}

module.exports = connectDB;