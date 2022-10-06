const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const keys = require("../../config/key");
const Items = require("../../models/Items");
var jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");
var nodemailer = require("nodemailer");

// @route   get api/items/test
// @desc    test User
// @access  Public
router.get("/test", (req, res) => {
  return res.json({ msg: "this is Items api" });
});

// @route   get api/items/getitems
// @desc    test User
// @access  Public
router.get("/getitems", (req, res) => {
  Items.find({}, function (err, items) {
    // var itemMap = {};
    // items.forEach(function (item) {
    //   itemMap[item._id] = item;
    // });
    // res.send(itemMap);
    res.send(items);
  });
//   return res.json({ msg: "this is Items api" });
});

module.exports = router;
