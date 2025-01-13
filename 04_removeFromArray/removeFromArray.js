const removeFromArray = function(array, ...args) {
    let newArray = [];
    array.forEach((i) => 
    {
        if (!args.includes(i))
        {
            newArray.push(i);
        }
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
