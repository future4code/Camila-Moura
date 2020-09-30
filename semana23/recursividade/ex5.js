var largestValue = function (arr, largest, index) {
    if (largest === void 0) { largest = 0; }
    if (index === void 0) { index = 0; }
    var largestNum = largest;
    if (arr[index] > largest) {
        largestNum = arr[index];
    }
    if (index === arr.length - 1) {
        return largestNum;
    }
    return largestValue(arr, index + 1, largestNum);
};
console.log(largestValue([1, 9, 100, 8, 15]));
