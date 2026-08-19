const express = require("express");
const {
  registrationController,
  loginController,
} = require("../controllers/authController");
const createLimiter = require("../utils/ralelimiter");

const _ = express.Router();



_.post("/registration", createLimiter(2), registrationController);
_.post("/login", createLimiter(2), loginController);

module.exports = _;
