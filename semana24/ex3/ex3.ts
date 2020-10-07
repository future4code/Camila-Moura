function checkParentesis(str: string): Boolean {
  const parentesisPairs = [];

  for (let i of str) {
    if (i === "(" || i === "[" || i === "{") {
      parentesisPairs.push(i);
    } else {
      const lastOpeningChar = parentesisPairs.pop();
      if (!lastOpeningChar) {
        return false;
      } else if (
        (lastOpeningChar === "(" && i !== ")") ||
        (lastOpeningChar === "[" && i !== "]") ||
        (lastOpeningChar === "{" && i !== "}")
      ) {
        return false;
      }
    }
  }
}
