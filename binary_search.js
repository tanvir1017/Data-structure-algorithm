const numbers = [1, 2, 4, 8, 9, 14, 15, 17, 18, 25, 28, 30, 38, 112, 156];

function binary_search(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) {
      return mid;
    }
    if (target < arr[mid]) {
      end = mid - 1;
    }
    if (target > arr[mid]) {
      end = mid + 1;
    }
  }
  return -1;
}

const index = binary_search(numbers, 156);
console.log(index);
