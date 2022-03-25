//extranal import
const express = require("express");

//internal import
const { getInbox } = require("../controller/inboxController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");

const { checkLogin } = require("../middlewares/common/checkLogin");

const router = express.Router();

//inbox page
router.get("/", decorateHTMLResponse("Inbox"), checkLogin, getInbox);

module.exports = router;
