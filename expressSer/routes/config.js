// Export mongoose
const  mongoose = require("mongoose");
const { MongoClient } = require("mongodb");


//Assign MongoDB connection string to Uri and declare options settings
const uri = 'mongodb://mongo:27017/inventoryDB'
const client = new MongoClient(uri);
const  options = {
    useNewUrlParser:  true,
    useUnifiedTopology:  true
};


mongoose.connect(uri, options).then(() =>{
     console.log("Database connection established!");
    },
    err  => {
    {
        console.log("Error connecting Database instance due to:", err);
    }
});