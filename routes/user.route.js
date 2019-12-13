var express = require("express");
var router = express.Router();

var controller = require("../controllers/user.controller");

// middleware
router.use(express.json());

// Thêm link ở dưới đây
// localhost/user/ + ....
router.get("/", controller.profile);
router.get("/login", controller.login);
router.get("/signup", controller.signup);

module.exports = router;