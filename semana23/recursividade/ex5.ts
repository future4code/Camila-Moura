const largestValue = (
  arr: number[],
  largest: number = 0,
  index: number = 0
): number => {
  let largestNum: number = largest;
  if (arr[index] > largest) {
    largestNum = arr[index];
  }

  if (index === arr.length - 1) {
    return largestNum;
  }

  return largestValue(arr, index + 1, largestNum);
};

console.log(largestValue([1, 9, 100, 8, 15]));
