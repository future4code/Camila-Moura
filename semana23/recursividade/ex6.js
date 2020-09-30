var capitalLetter = function (input, letter) {
    if (letter === void 0) { letter = ""; }
    if (letter && letter.toUpperCase() === letter) {
        return letter;
    }
    return capitalLetter(input.substring(1), input[0]);
};
console.log(capitalLetter("labEnu"));
