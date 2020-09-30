var printArr = function (arr, index) {
    if (index === void 0) { index = arr.length - 1; }
    if (index >= 0) {
        printArr(arr, index - 1);
        console.log(index + ": " + arr[index]);
    }
};
console.log(printArr(["Oi", 4, 3]));
