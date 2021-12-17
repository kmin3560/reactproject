const express = require("express");
const router = express.Router();
const authController = require("../../controllers/auth/authController");

//회원가입
router.post("/signin", authController.signin);

//로그인
router.post("/signup", authController.signup);

module.exports = router;
