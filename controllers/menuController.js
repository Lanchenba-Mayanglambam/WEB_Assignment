const menu = require("../models/menuSchema.js");



const menuController = {
    home: (req, res) => {
        res.render("home");
    },



    getMenu: async (req, res) => {
        const allMenu = await menu.find();
        console.log(allMenu);
        res.render("Food", { allMenu });
    },



    searchItem: async (req, res) => {
        try {
            const searchText = req.query.q;

            const items = await menu.find({
                FoodName: {
                    $regex: searchText,
                    $options: "i"
                }
            });

            res.render("searchResults", { items });

        } catch (err) {
            res.status(500).send(err.message);
        }
    },


    sortByPrice: async (req, res) => {
        try {
            const order = req.query.order;
            let items;
            if (order == "asc") {
                items = await menu.find().sort({ Price: 1 });

            }
            else {
                items = await menu.find().sort({ Price: -1 });

            }

            res.render("Food", { allMenu : items });

            
        } catch (error) {
            res.status(500).send(err.message);
        }
    }



}



module.exports = menuController;