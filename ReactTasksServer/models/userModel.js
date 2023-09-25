const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    username : {
        type : String,
        trim : true,
        required:[true, 'Username cannot be empty']
    },
    email : {
        type : String,
        unique : [true, " Email already exists"]
    } 
}, {timestamps : true});

module.exports = mongoose.model("users", UserSchema);