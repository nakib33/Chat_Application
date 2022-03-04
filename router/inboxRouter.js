//extranal import
const express = require("express");

//internal import
const { getInbox } = require("../controller/inboxController");
const decorateHTMLResponse = require("../middlewares/common/decorateHTMLResponse");

const router = express.Router();

//inbox page
router.get("/", decorateHTMLResponse("Inbox"), getInbox);

module.exports = router;
