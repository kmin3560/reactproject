const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/users/usersController");
const authModule = require("../../modules/authModule");
const upload = require("../../modules/awsUpload");

//계정 정보를 가져온다
//http method : GET
// /users

router.get("/", authModule.loggedIn, usersController.getUserInfo);
router.post("/images", upload.single("img"), usersController.uploadImage);

module.exports = router;
