const registerController = require("../controllers/userController");
const express = require("express");
const router = express.Router();

router.route("/register").post(registerController);


module.exports = router;