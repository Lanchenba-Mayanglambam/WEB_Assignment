require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/db.js");
const logger = require("./middleware/logger.js");
const menuRoutes = require("./routes/menuRoutes.js");
const port = process.env.PORT;

connectDB();



app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("view engine","ejs");




app.use(logger);
app.use("/",menuRoutes);




app.listen(port,()=>{
    console.log("Server is live at port 3000...");
})