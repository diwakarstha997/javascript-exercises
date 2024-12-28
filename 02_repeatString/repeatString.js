const repeatString = function(inputString, repeatCount) {
    let resultedString = '';
    for (let i = 1; i <= repeatCount; i++) {
        resultedString += inputString;
    }
    if(repeatCount < 0) resultedString = 'ERROR';
    return resultedString;
};

// Do not edit below this line
module.exports = repeatString;
