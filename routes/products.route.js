var express = require("express");
var router = express.Router();

var controller = require("../controllers/products.controller");

// middleware
//router.use(express.json());

// Thêm link ở dưới đây
// localhost/user/ + ....
router.get("/", controller.profile);

router.get("/category", controller.category);

module.exports = router;

