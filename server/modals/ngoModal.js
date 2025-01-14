const mongoose = require("mongoose");

const  ngoSchema = mongoose.Schema(
  {
    Ngoname : {
        type : String,
        required : [true,'Name Is Required']
    },
   
    Ngoemail : {
        type : String,
        required : [true,'Email Is Required']
    },
    NgoAddress : {
        type : String,
        required : [true,'Address Is Required']
    },
    NgoState:{
        type : String,
        required : [true,'State Is Required']
    },

    NgoCity : {
        type : String,
        required : [true,'City Is Required']
    },
    NgoPincode: {
        type: Number,
        required: [true, 'Pincode is required']
    },
    Ngopassword: {
        type: String,
        required: [true, 'Password is required']
    },
    NgoPNumber: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    NgoaltPNumber: {
        type: Number,
        required: [true, 'Alternative Phone number is required']
    },
    NgoComment: {
        type: String,
        required: [true, 'Comment is required']
    }
  },
  { timeStamps: true }
);

module.exports = mongoose.model("Ngos", ngoSchema);
