const express = require("express");
const app = express();
const cors = require("cors");
const connectDb = require('./config/db');
const userModel = require("./models/userModel");

app.use(cors());
app.use(express.json());

connectDb();

app.get("/", async (req, res) => {
    const userData  = await userModel.find();
    console.log(userData);
    res.json(userData);
});

const PORT = 3030;
app.listen(PORT, () => {
    console.log(`Sever Connected : http://localhost:${PORT}`);
});