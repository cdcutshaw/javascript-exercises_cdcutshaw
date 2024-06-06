const reverseString = function(string) {
    let splitString = string.split("");
    let reverseLetters = splitString.reverse ();
    let joinLetters = reverseLetters.join("")

    return joinLetters;

};

// Do not edit below this line
module.exports = reverseString;
