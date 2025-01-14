const express = require("express");
const Contact = require("../modals/userModal");
// const bgDonor = require("../modals/DonorRegistration");
// const volunteer = require("../modals/volunteerRegistration");
const router = express.Router();

//  @route GET api/contacts
//  @desc Get all contacts
router.post("/contact", (req, res) => {
  const {
    UserName,
    UserPhoneNumber,
    UserEmail,
    UserMessage,
  } = req.body;

  const contact = new Contact({
    UserName,
    UserPhoneNumber,
    UserEmail,
    UserMessage,
  });
  try {
    contact.save();
    res.status(200).json({
      success: true,
      message: "Contact details Success",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

// DONATING BLOOD GROUP VIEW ROUTER
router.post("/submit", (req, res) => {
  const {
    DonorName,
    DonorEmail,
    DonorPhone,
    DonorBloodGroup,
    DonorAddress,
  } = req.body;

  const donorRegistration = new bgDonor({
    DonorName,
DonorEmail,
DonorPhone,
DonorBloodGroup,
DonorAddress,
  });
  try {
    donorRegistration.save();
    res.status(200).json({
      success: true,
      message: "Blood Group Registration done Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

// 
router.post("/registration", (req, res) => {
  const {
    VolunteerName,
    VolunteerEmail,
    VolunteerPhone,
    VolunteerBloodGroup,
    VolunteerAddress,
  } = req.body;

  const volunteerRegistration = new volunteer({
    VolunteerName,
    VolunteerEmail,
    VolunteerPhone,
    VolunteerBloodGroup,
    VolunteerAddress,
  });
  try {
    volunteerRegistration.save();
    res.status(200).json({
      success: true,
      message: "Volunteer Registration done Successfully",
    });
  } catch (error) {
    res.status(400).json({
      message: error,
    });
  }
});

module.exports = router;
