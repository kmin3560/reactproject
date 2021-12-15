const express = require("express");
const router = express.Router();
const authModule = require("../../modules/authModule");

const postController = require("../../controllers/posts/postsController");

router.post("/", authModule.loggedIn, postController.createPost);

router.get("/", postController.readPost);

router.put("/:id", postController.updatePost);

router.delete("/:id", postController.deletePost);

router.get("/:id", postController.readDataPost);

module.exports = router;
