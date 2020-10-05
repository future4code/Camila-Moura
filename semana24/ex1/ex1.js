function missingNumber(arr) {
  if (arr.length !== 100) {
    throw new Error("Insira array com 100 itens");
  }

  const expectedSum = 5050;
  let sum = 0;
  for (const num of arr) {
    let sum = sum + num;
  }
  return expectedSum - sum;
}
