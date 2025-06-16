export function getHeapSortAnimations(arr) {
  const animations = [];
  const array = arr.slice();
  const n = array.length;

  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(array, n, i, animations);
  }

  for (let i = n - 1; i > 0; i--) {
    animations.push([0, i, true]);
    [array[0], array[i]] = [array[i], array[0]];
    heapify(array, i, 0, animations);
  }

  return animations;
}

function heapify(array, n, i, animations) {
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;

  if (left < n) {
    animations.push([largest, left, false]);
    if (array[left] > array[largest]) {
      largest = left;
    }
  }

  if (right < n) {
    animations.push([largest, right, false]);
    if (array[right] > array[largest]) {
      largest = right;
    }
  }

  if (largest !== i) {
    animations.push([i, largest, true]);
    [array[i], array[largest]] = [array[largest], array[i]];
    heapify(array, n, largest, animations);
  }
}
