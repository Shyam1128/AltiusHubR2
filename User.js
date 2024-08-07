const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    username : {
        type : String,
        required: true
    },
    email : {
        type : String,
        minlength : 6,
        required : true
    },
    password : {
        type : String,
        required : true
    }
})

const User = mongoose.model("user",Schema);
module.exports = User;