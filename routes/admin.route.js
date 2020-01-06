var express = require("express");
var router = express.Router();

var controller = require("../controllers/admin.controller");

// middleware
router.use(express.json());

// Thêm link ở dưới đây
// localhost/admin/ + ....
router.get("/", controller.welcome);
router.get("/test", controller.test);
router.get("/login", controller.login);
router.post("/login", controller.postLogin);
router.post("/logout", controller.logout);
router.get("/mngr", controller.mngr);


module.exports = router;
