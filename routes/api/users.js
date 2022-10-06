const express = require("express");
const bcrypt = require("bcryptjs");
const router = express.Router();
const keys = require("../../config/key");
const User = require("../../models/User");
var jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");
var nodemailer = require("nodemailer");

// @route   get api/users/test
// @desc    test User
// @access  Public
router.get("/test", (req, res) => {
  return res.json({ msg: "this is test" });
});

// @route   POST api/users
// @desc    Register User
// @access  Public
router.post("/signup", async (req, res) => {
  // console.log(req);
  User.findOne({ email: req.body.email }).then((user) => {
    if (user) {
      res.status(400).json("Email Already Exist!");
    } else {
      const newUser = new User({
        email: req.body.email,
        password: req.body.password,
        username: req.body.username,
        usertype: req.body.usertype,
      });

      // Hash password before saving in database
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => res.json(user))
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

// @route   POST api/users
// @desc    Login User
// @access  Public
router.post("/login", async (req, res) => {
  password = req.body.password;
  email = req.body.email;

  User.findOne({ email: req.body.email }).then((user) => {
    // Check if user exists
    if (!user) {
      return res.status(400).json("Email not found");
    }

    // Check password
    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        res.json(user);

        // // User matched
        // // Create JWT Payload
        // const payload = {
        //   id: user.id,
        //   email: req.body.email
        // };

        // // Sign token
        // jwt.sign(
        //   payload,
        //   keys.secretOrKey,
        //   {
        //     expiresIn: 31556926 // 1 year in seconds
        //   },
        //   (err, token) => {
        //     res.json({
        //       success: true,
        //       token: token
        //     });
        //   }
        // );
      } else {
        return res.status(400).json("Password incorrect");
      }
    });
  });
});

module.exports = router;
