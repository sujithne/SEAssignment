const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");
// Declare schema and assign Schema class
const Schema = mongoose.Schema;


// Create Schema Instance and add schema propertise
const LoginSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    username: {
        type:String,
        required:true,
        unique: true,
       
    },
    passwordHash:{
        type:String,
        required:true
    },
    info:{
        type:String
    }
   
});

// create and export model
module.exports = mongoose.model("LoginDB", LoginSchema);
