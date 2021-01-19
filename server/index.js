//Express
const express = require("express")
const bodyParser = require("body-parser");

const app = express()

app.use(bodyParser.json())

app.use(express.static('views'));
//Route
const convert = require("../routes/convert");

//dotenv
require("dotenv").config();

//mongoose
/*
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection;
db.on("error", function () {
    console.error("Error")
})
db.on("open", function () {
    console.log("Successful connection with DB")
})
*/
app.use("/api/convert", convert);

app.get("/", (req, res) => {
    res.render('index')
})

const PORT = process.env.PORT || 4001;
app.listen(PORT, () => {
    console.log(`Running on server ${PORT}`)
})