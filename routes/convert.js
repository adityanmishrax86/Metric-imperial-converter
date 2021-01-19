const convertRouter = require("express").Router();
const inputMiddleware = require("../middleware/inputMiddleware");
const convert = require("../utilities/convert");
const sysConverter = require("../utilities/sysConverter");

convertRouter.get("/", inputMiddleware, (req, res) => {

    let { num, sys } = convert(req.inputNum, req.inputSys)
    let output = {
        initNum: eval(req.inputNum),
        initUnit: req.inputSys,
        returnNum: num,
        returnUnit: sys,
        string: ""
    }

    if (output.returnNum == 0) {
        res.send("invalid unit")
    } else {
        output.string = `${output.initNum} ${sysConverter(output.initUnit).initSys} converts to ${output.returnNum} ${sysConverter(output.initUnit).returnSys}`
        res.send(output)
    }
})

module.exports = convertRouter;