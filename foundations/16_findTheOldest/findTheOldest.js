const findTheOldest = function(array) {
    // Add age in object
    const agedObject = array.map(item => {
        let age = 0;

        if (item.yearOfDeath) age = item.yearOfDeath - item.yearOfBirth;
        else age = new Date().getFullYear() - item.yearOfBirth;

        return {name: item.name, age: age};
    });
    // Sort array of objects in Descending order by age
    const sortedArray = agedObject.sort((a, b) => b.age - a.age);
    // Return object
    return sortedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
