const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const keys = require("../../config/key");
const Retailer = require("../../models/Retailer");
var jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");
var nodemailer = require("nodemailer");

// @route   get api/retailer/test
// @desc    test User
// @access  Public
router.get("/test", (req, res) => {
  return res.json({ msg: "this is Retailer api" });
});

// @route   get api/retailer/getretailer
// @desc    test User
// @access  Public
router.get("/getretailer", (req, res) => {
  Retailer.find({}, function (err, retailers) {
    // var retailerMap = {};
    // retailers.forEach(function (retailer) {
    //   retailerMap[retailer._id] = retailer;
    // });
    // res.send(retailerMap);
    res.send(retailers);
  });
//   return res.json({ msg: "this is Items api" });
});

module.exports = router;
