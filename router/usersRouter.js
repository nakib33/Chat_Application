//extranal import
const express = require("express");

//internal import
const { getUsers } = require("../controller/usersController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

//login page
router.get("/", decorateHTMLResponse("Users"), getUsers);

module.exports = router;
