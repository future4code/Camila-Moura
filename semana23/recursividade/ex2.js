var numberSum = function (num, acc) {
    if (acc === void 0) { acc = 0; }
    if (num === 0) {
        return acc;
    }
    return numberSum(num - 1, acc + num);
};
console.log(numberSum(4));
