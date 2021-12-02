const numbers = [10, 14, 15, 17, 12, 154, 147, 19, 50];

function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}

const search = linear_search(numbers, 12);
console.log(search);
