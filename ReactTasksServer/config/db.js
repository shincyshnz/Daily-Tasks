const mongoose = require("mongoose")

const connectDb = async() => {
    try {
        const { connection } = await mongoose.connect("mongodb://127.0.0.1:27017/testDb");
        console.log("DB connected : ", connection.host);
    } catch (error) {
        console.log(error);
    }

}

module.exports = connectDb;