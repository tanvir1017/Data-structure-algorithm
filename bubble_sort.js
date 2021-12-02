const numbers = [14, 19, 24, 44, 5, 14, 2, 1, 214, 01, 247];

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
    // for (let j = 0; j < array.length - 1; j++) {
    //   if (array[j] < array[j + 1]) {
    //     [array[j], array[j + 1]] = [array[j + 1], array[j]];
    //   }
    // }
  }
  return array;
}

const sorted = bubble_sort(numbers);
console.log(sorted);
