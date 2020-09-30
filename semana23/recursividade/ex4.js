var numberDigits = function (num, acc) {
    if (acc === void 0) { acc = 1; }
    if (num < 10) {
        return acc;
    }
    return numberDigits(num / 10, acc + 1);
};
console.log(numberDigits(123456));
