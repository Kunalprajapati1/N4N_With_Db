const mongoose = require("mongoose");

const  donatorSchema = mongoose.Schema(
  {
    Donatorname : {
        type : String,
        required : [true,'Name Is Required']
    },
   
    DonatorEmail : {
        type : String,
        required : [true,'Email Is Required']
    },
    Donatorpincode: {
        type: Number,
        required: [true, 'Pincode is required']
    },
    Donatorphone: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    Donatormessage: {
        type: String,
        required: [true, 'Message is required']
    },
    DonatorPassword: {
        type: String,
        required: [true, 'Password is required']
    },
 

  },
  { timeStamps: true }
);

module.exports = mongoose.model("Donators", donatorSchema);
