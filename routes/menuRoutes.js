const express = require("express");
const router = express.Router();

const menuController = require("../controllers/menuController.js")



router.get("/", menuController.home);
router.get("/getMenu", menuController.getMenu);
router.get("/search", menuController.searchItem);
router.get("/sort/price", menuController.sortByPrice);
router.get("/addItem", menuController.addItem);
router.get("/editItem/:userid", menuController.editItem);
router.get("/deleteItem/:id", menuController.deleteItem);
router.post("/createItem", menuController.createItem);
router.post("/update/:userid", menuController.updateItem);








module.exports = router;