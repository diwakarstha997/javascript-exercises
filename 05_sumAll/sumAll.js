const sumAll = function(startInputNumber, endInputNumber) {
    let sumOfAllNumber = 0;
    let loopStartIndex = startInputNumber;
    let loopEndIndex = endInputNumber;

    if(startInputNumber < 0 || endInputNumber < 0) {
        return "ERROR";
    }
    if (typeof(startInputNumber) !== "number" || typeof(endInputNumber) !== "number") {
        return "ERROR"
    }
    if (startInputNumber % 1 > 0 || endInputNumber % 1 > 0) {
        return "ERROR"
    }
    if (startInputNumber > endInputNumber) {
        loopStartIndex = endInputNumber;
        loopEndIndex = startInputNumber;
    }

    for (let i = loopStartIndex; i <= loopEndIndex && i > 0; i++) {
        sumOfAllNumber += i;
    }

    return sumOfAllNumber;
};

// Do not edit below this line
module.exports = sumAll;
