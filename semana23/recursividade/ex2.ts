const numberSum = (num: number, acc: number = 0): number => {
  if (num === 0) {
    return acc;
  }
  return numberSum(num - 1, acc + num);
};

console.log(numberSum(4));
