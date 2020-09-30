const capitalLetter = (input: string, letter: string = ""): string => {
  if (letter && letter.toUpperCase() === letter) {
    return letter;
  }

  return capitalLetter(input.substring(1), input[0]);
};

console.log(capitalLetter("labEnu"));
