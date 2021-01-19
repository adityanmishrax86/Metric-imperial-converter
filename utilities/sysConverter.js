const sysConverter = sys => {
    initSys = ""
    returnSys = ""
    switch (sys) {
        case "mi":
            initSys = "miles"
            returnSys = "kilometers"
            break;
        case "km":
            initSys = "kilometers"
            returnSys = "miles"
            break;
        case "L":
            initSys = "Litres"
            returnSys = "gallons"
            break;
        case "gal":
            initSys = "gallons"
            returnSys = "Litres"
            break;
        case "kg":
            initSys = "kilograms"
            returnSys = "pounds"
            break;
        case "lbs":
            initSys = "pounds"
            returnSys = "kilograms"
            break;
    }

    return {
        initSys, returnSys
    }

}

module.exports = sysConverter