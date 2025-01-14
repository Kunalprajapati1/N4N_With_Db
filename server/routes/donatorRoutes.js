const express = require("express");
const Donator = require("../modals/donatorModal");
const router = express.Router();

router.post("/signup", (req, res) => {
  const {
    Donatorname,
    DonatorEmail,
    Donatorpincode,
    Donatorphone,
    Donatormessage,
    DonatorPassword,
    DonatorConfirmpassword,
  } = req.body;

  const newDonator = new Donator({
    Donatorname,
    DonatorEmail,
    Donatorpincode,
    Donatorphone,
    Donatormessage,
    DonatorPassword,
    DonatorConfirmpassword,
  });
  try {
    newDonator.save();
    res.status(200).json({
      success: true,
      message: "Signin Success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

router.post("/login", async (req, res) => {
  const { DonatorEmail, DonatorPassword } = req.body;
  try {
    const donator = await Donator.find({ DonatorEmail, DonatorPassword });
    if (donator.length > 0) {
      const currentDonator = {
        Donatorname: donator[0].Donatorname,
        DonatorEmail: donator[0].DonatorEmail,
        Donatorpincode: donator[0].Donatorpincode,
        Donatorphone: donator[0].Donatorphone,
        Donatormessage: donator[0].Donatormessage,
        DonatorPassword: donator[0].DonatorPassword,

        _id: donator[0]._id,
      };
      res.status(200).send(currentDonator);
    } else {
      res.status(400).json({
        message: "Login Failed",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Something Went Wrong",
    });
  }
});

router.post("/admindeletedonator", async (req, res) => {
  const donatorId = req.body.donatorId;
  try {
    await Donator.findOneAndDelete({ _id: donatorId });
    res.status(200).send("Donator Deleted Successfully");
  } catch (error) {
    res.status(404).json({ message: error });
  }
});

router.get("/getAllDonator", async (req, res) => {
  try {
    const donators = await Donator.find({});
    res.status(200).send(donators);
  } catch (error) {
    res.status(404).json({ message: error.stack });
  }
});

router.post("/adddonator", async (req, res) => {
  const { donator } = req.body;
  try {
    const newdonator = new Donator({
      Donatorname: donator.Donatorname ,
    DonatorEmail: donator.DonatorEmail ,
    Donatormessage: donator.Donatormessage ,
    Donatorphone: donator.Donatorphone ,
    DonatorPassword: donator.DonatorPassword
      });
    await newdonator.save();
    res.status(201).send("New Donator Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.post('/getdonatorbyid',async (req,res) => {
  const donatorId = req.body.donatorId;
  try {
       const donator = await Donator.findOne({_id:donatorId});
       res.send(donator);
  } catch (error) {
       res.json({message : error});
  }
});
router.post('/updateddonator',async (req,res) => {
  const updatedDonator = req.body.updatedDonator;
  try {
       const donator = await Donator.findOne({_id:updatedDonator._id});
       
       
       donator.Donatorname = updatedDonator.Donatorname;
       donator.DonatorEmail = updatedDonator.DonatorEmail;
       donator.Donatormessage = updatedDonator.Donatormessage;
       donator.Donatorphone = updatedDonator.Donatorphone;
       donator.DonatorPassword = updatedDonator.DonatorPassword;
       
       await donator.save();
       res.status(200).send('Donator Updated Successfully');
  } catch (error) {
       res.status(400).json({message : error});
  }
});

router.post('/deleteddonator',async (req,res) => {
  const donatorId = req.body.donatorId;
  try {
       await Donator.findOneAndDelete({_id:donatorId});
       res.status(200).send('Donator Deleted Successfully');
  } catch (error) {
       res.status(404).json({message : error});
  }
});




module.exports = router;
