const numbersAsc = (num: number): void => {
  if (num >= 0) {
    numbersAsc(num - 1);
    console.log(num);
  }
};

const numbersDesc = (num: number): void => {
  if (num >= 0) {
    console.log(num);
    numbersDesc(num - 1);
  }
};

console.log(numbersAsc(4));
console.log(numbersDesc(4));
