const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menuController.js")



router.get("/", menuController.home);
router.get("/getMenu", menuController.getMenu);
router.get("/search", menuController.searchItem);
router.get("/sort/price", menuController.sortByPrice);





module.exports = router;