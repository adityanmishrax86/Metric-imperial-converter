const convert = (num, sys) => {
    num = eval(num);
    switch (sys) {
        case "kg":
            num = num * 2.20462;
            sys = "lbs"
            break;
        case "lbs":
            num = num * 0.45392;
            sys = "kg"
            break;
        case "mi":
            num = num * 1.60934
            sys = "km"
            break;
        case "km":
            num *= 0.621371
            sys = "mi"
            break;
        case "gal":
            num *= 3.78541
            sys = "L"
            break;
        case "L":
            num *= 0.264172
            sys = "gal"
            break;
        default:
            num = 0
            sys = ""
            break;
    }
    return {
        num: Number(num.toFixed(5)), sys
    }
}

module.exports = convert;