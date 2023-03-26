// Import mongoose
const mongoose = require("mongoose");
// Declare schema and assign Schema class
const Schema = mongoose.Schema;


// Create Schema Instance and add schema propertise
const InvtSchema = new Schema({
    name: {
        type:String,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image: {
        data: Buffer,
        contentType: String
      }
});

// create and export model
module.exports = mongoose.model("inventoryDB", InvtSchema);
