const express = require("express");
const router = express.Router();

const postRouter = require("./posts/index.js");
const authRouter = require("./auth/index.js");
const usersRouter = require("./users/index.js");

router.use("/posts", postRouter);
router.use("/auth", authRouter);
router.use("/users", usersRouter);

module.exports = router;
