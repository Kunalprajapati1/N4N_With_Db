const mongoose = require("mongoose");

const  userContactSchema = mongoose.Schema(
  {
    UserName : {
        type : String,
        required : [true,'Name Is Required']
    },
    UserEmail: {
        type: String,
        required: [true, 'Email is required']
    },
    UserPhoneNumber: {
        type: Number,
        required: [true, 'Phone number is required']
    },
    UserMessage: {
        type: String,
        required: [true, 'Message is required']
    },

  },
  { timeStamps: true }
);

module.exports = mongoose.model("userContact", userContactSchema);
