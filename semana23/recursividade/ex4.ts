const numberDigits = (num: number, acc: number = 1): number => {
  if (num < 10) {
    return acc;
  }

  return numberDigits(num / 10, acc + 1);
};

console.log(numberDigits(123456));
