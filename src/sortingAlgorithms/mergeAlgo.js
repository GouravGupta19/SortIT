export function getMergeSortAnimations(array) {
  const arr = array.slice();
  const animations = [];
  if (arr.length <= 1) return animations;
  mergeSortInPlace(arr, 0, arr.length - 1, animations);
  return animations;
}

function mergeSortInPlace(array, left, right, animations) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);
  mergeSortInPlace(array, left, mid, animations);
  mergeSortInPlace(array, mid + 1, right, animations);
  merge(array, left, mid, right, animations);
}

function merge(array, left, mid, right, animations) {
  let start2 = mid + 1;

  if (array[mid] <= array[start2]) return;

  while (left <= mid && start2 <= right) {
    animations.push([left, start2, false]);

    if (array[left] <= array[start2]) {
      left++;
    } else {
      let value = array[start2];
      let index = start2;

      while (index > left) {
        animations.push([index, index - 1, true]);
        [array[index], array[index - 1]] = [array[index - 1], array[index]];
        index--;
      }

      array[left] = value;

      left++;
      mid++;
      start2++;
    }
  }
}
