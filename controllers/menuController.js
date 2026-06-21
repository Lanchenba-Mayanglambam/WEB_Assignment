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


    sortByPrice : async (req, res) => {
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
    },


    addItem : async (req,res)=>{
        res.render("form");
    },


    editItem : async (req,res)=>{
        const data = await menu.findById(req.params.userid);
        res.render("edit", { data });
    },


    deleteItem : async (req,res)=>{
        await menu.findByIdAndDelete(req.params.id);
        res.redirect("/getMenu")
    },


    updateItem: async (req, res) => {
        await menu.findByIdAndUpdate(req.params.userid, req.body, {
            new: true
        });

        res.redirect("/getMenu");
    },


    createItem: async (req, res) => {
        req.body.ip = req.ip;
        await menu.create(req.body);
        res.redirect("/getMenu");
    }




}



module.exports = menuController;