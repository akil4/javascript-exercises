const palindromes = function (string) {
    string = string.toLowerCase().trim().match(/[a-zA-Z0-9]/g);

    let start = 0;
    let end = string.length - 1;

    while (start < end) {
        if (string[start] === string[end]) {
            start++;
            end--;
        }
        else if (string[start] !== string[end]) {
            return false;
        }
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
