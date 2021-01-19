const mongoose = require("mongoose");

const converterSchema = new mongoose.Schema({
    input: String,
    initNum: Number,
    initSys: String,
    returnNum: Number,
    returnSys: String
})

const Converter = mongoose.model("Converter", converterSchema);

module.exports = Converter;