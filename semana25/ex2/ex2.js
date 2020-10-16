function sum(array, target) {
    let length = array.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (array[i] + array[j] == target) {
                return [i,j];
            }
        }
      }
    };