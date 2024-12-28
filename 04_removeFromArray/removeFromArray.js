const removeFromArray = function() {
    let resultedArray = arguments[0];

    for (let i = 1; i <= arguments.length - 1; i++) {
        let tempArray = [];
        for(let item of resultedArray) {
            if(arguments[i] !== item) tempArray.push(item);
        }
        resultedArray = tempArray;
    }


    return resultedArray;
};

// Do not edit below this line
module.exports = removeFromArray;
