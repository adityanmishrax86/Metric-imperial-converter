const getInput = require("../utilities/getInput");

const inputMiddleware = (req, res, next) => {
    const { inputNum, inputSys } = getInput(req.query.input);
    if (inputSys.length === 0)
        res.send("invalid unit")
    else if (inputNum.length === 0) {
        req.inputNum = 1;
        req.inputSys = inputSys;
        next();
    } else {
        req.inputNum = inputNum;
        req.inputSys = inputSys;
        next();
    }

}

module.exports = inputMiddleware;