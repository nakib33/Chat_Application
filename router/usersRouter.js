//extranal import
const express = require("express");
const { check } = require("express-validator");

//internal import
const {
  getUsers,
  addUser,
  removeUser,
} = require("../controller/usersController");

const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");
const avatarUpload = require("../middlewares/users/avatarUpload");
const {
  addUserValidators,
  addUserValidationHandler,
} = require("../middlewares/users/userValidators");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

//login page
router.get("/", decorateHTMLResponse("Users"), checkLogin, getUsers);

//add user
router.post(
  "/",
  checkLogin,
  avatarUpload,
  addUserValidators,
  addUserValidationHandler,
  addUser
);

//remove user
router.delete("/:id", removeUser);

module.exports = router;
