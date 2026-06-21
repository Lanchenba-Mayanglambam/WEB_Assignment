require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongodb connected");
        console.log(mongoose.connection.host);
        console.log(mongoose.connection.name);
        
    } catch (error) {
        console.log("Mongodb fail to connect");
        
    }
};


module.exports = connectDB;