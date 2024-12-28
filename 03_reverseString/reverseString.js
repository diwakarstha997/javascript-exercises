const reverseString = function(inputString) {
    let reversedString = '';
    let splitStringArray = inputString.split("");
    for (let i = splitStringArray.length - 1; i >= 0; i--) {
        reversedString += splitStringArray[i];
    }

    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
