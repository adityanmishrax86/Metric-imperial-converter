const getInput = (input) => {
    const systems = ["kg", "gal", "L", "lbs", "mi", "km"]
    let inputNum = 0;
    let inputSys = "";

    systems.map(i => {
        const index = input.indexOf(i);
        if (index !== -1) {
            inputNum = input.substring(0, index)
            inputSys = input.substring(index, input.length)
        }
    })

    return {
        inputNum,
        inputSys
    }
}

module.exports = getInput;