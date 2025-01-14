const express = require("express");
const Ngo = require("../modals/ngoModal");
const router = express.Router();

router.post("/signup", (req, res) => {
  const {
    Ngoname,
    Ngoemail,
    NgoAddress,
    NgoState,
    NgoCity,
    NgoPincode,
    Ngopassword,
    NgoPNumber,
    NgoaltPNumber,
    NgoComment,
  } = req.body;

  const newNgo = new Ngo({
    Ngoname,
    Ngoemail,
    NgoAddress,
    NgoState,
    NgoCity,
    NgoPincode,
    Ngopassword,
    NgoPNumber,
    NgoaltPNumber,
    NgoComment,
  });
  try {
    newNgo.save();
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
  const { Ngoemail, Ngopassword } = req.body;
  try {
    const ngo = await Ngo.find({ Ngoemail, Ngopassword });
    if (ngo.length > 0) {
      const currentNgo = {
        Ngoname: ngo[0].Ngoname,
        Ngoemail: ngo[0].Ngoemail,
        NgoAddress: ngo[0].NgoAddress,
        NgoState: ngo[0].NgoState,
        NgoCity: ngo[0].NgoCity,
        NgoPincode: ngo[0].NgoPincode,
        Ngopassword: ngo[0].Ngopassword,
        NgoPNumber: ngo[0].NgoPNumber,
        NgoaltPNumber: ngo[0].NgoaltPNumber,
        _id: ngo[0]._id,
      };
      res.status(200).send(currentNgo);
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


router.post('/admindeletengo',async (req,res) => {
  const ngoId = req.body.ngoId;
  try {
       await Ngo.findOneAndDelete({_id:ngoId});
       res.status(200).send('ngo Deleted Successfully');
  } catch (error) {
       res.status(404).json({message : error});
  }
});



router.get('/getAllNgo', async (req,res) => {
  try {
   const ngos = await Ngo.find({});
  res.status(200).send(ngos);
  } catch (error) {
   res.status(404).json({message : error.stack});
  }
});

router.post("/addngo", async (req, res) => {
  const { ngo } = req.body;
  try {
    const newngo = new Ngo({
      Ngoname: ngo.Ngoname,
        Ngoemail: ngo.Ngoemail,
        NgoAddress: ngo.NgoAddress,
        NgoState: ngo.NgoState,
        NgoCity: ngo.NgoCity,
        NgoPincode: ngo.NgoPincode,
        Ngopassword: ngo.Ngopassword,
        NgoPNumber: ngo.NgoPNumber,
        NgoaltPNumber: ngo.NgoaltPNumber,
      });
    await newngo.save();
    res.status(201).send("New Ngo Added");
  } catch (error) {
    res.json({ message: error });
  }
});

router.post('/getngobyid',async (req,res) => {
  const ngoId = req.body.ngoId;
  try {
       const ngo = await Ngo.findOne({_id:ngoId});
       res.send(ngo);
  } catch (error) {
       res.json({message : error});
  }
});


router.post('/updatedngo',async (req,res) => {
  const updatedNgo = req.body.updatedNgo;
  try {
       const ngo = await Ngo.findOne({_id:updatedNgo._id});
       ngo.Ngoname = updatedNgo.Ngoname;
       ngo.Ngoemail = updatedNgo.Ngoemail;
       ngo.NgoAddress = updatedNgo.NgoAddress;
       ngo.NgoState = updatedNgo.NgoState;
       ngo.NgoCity = updatedNgo.NgoCity;
       ngo.NgoPincode = updatedNgo.NgoPincode;
       ngo.Ngopassword = updatedNgo.Ngopassword;
       ngo.NgoPNumber = updatedNgo.NgoPNumber;
       ngo.NgoaltPNumber = updatedNgo.NgoaltPNumber;
       await ngo.save();
       res.status(200).send('NGO Updated Successfully');
  } catch (error) {
       res.status(400).json({message : error});
  }
});

router.post('/deletedngo',async (req,res) => {
  const ngoId = req.body.ngoId;
  try {
       await Ngo.findOneAndDelete({_id:ngoId});
       res.status(200).send('Ngo Deleted Successfully');
  } catch (error) {
       res.status(404).json({message : error});
  }
});


module.exports = router;
