function indexOf(collection: string, target: string): string | Number {
  for (let i = 0; i < collection.length; i++) {
    if (collection[i] === target) {
      return i;
    }
  }
  return -1;
}
