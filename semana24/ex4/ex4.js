function longestPrefix(input) {
    var prefix = "";
    if (input === null || input.length === 0)
        return prefix;
    for (var i = 0; i < input[0].length; i++) {
        var letter = input[0][i];
        for (var j = 1; j < input.length; j++) {
            // loop through all other strings in the array
            if (input[j][i] !== letter)
                return prefix;
        }
        prefix = prefix + letter;
    }
    return prefix;
}
console.log(longestPrefix(["flower", "flow", "flight"]));
