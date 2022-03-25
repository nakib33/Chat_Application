//extranal import
const express = require("express");
const router = express.Router();

//internal import
const { getLogin, login, logout } = require("../controller/loginController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");
const {
  doLoginValidators,
  doLoginVValidatorsHandler,
} = require("../middlewares/login/loginValidators");

const { redirectLoggedIn } = require("../middlewares/common/checkLogin");

//set page title
const page_title = "Login";

//login page
router.get("/", decorateHTMLResponse(page_title), redirectLoggedIn, getLogin);

//porocess login
router.post(
  "/",
  redirectLoggedIn,
  decorateHTMLResponse(page_title),
  doLoginValidators,
  doLoginVValidatorsHandler,
  login
);

//logout
router.delete("/", logout);

module.exports = router;
