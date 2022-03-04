//extranal import
const express = require("express");

//internal import
const { getLogin } = require("../controller/loginController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

//login page
router.get("/", decorateHTMLResponse("Login"), getLogin);

module.exports = router;
