const printArr = (arr: any[], index: number = arr.length - 1): void => {
  if (index >= 0) {
    printArr(arr, index - 1);
    console.log(`${index}: ${arr[index]}`);
  }
};

console.log(printArr(["Oi", 4, 3]));
