// Export mongoose
const  mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

//Assign MongoDB connection string to Uri and declare options settings
const uri = 'mongodb://localhost:27017/inventoryDB'

// Declare a variable named option and assign optional settings
const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};

const client = new MongoClient(uri);

mongoose.connect(uri, options).then(() =>{
     console.log("Database connection established!");
    },
    err  => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});