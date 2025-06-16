export function getQuickSortAnimations(array) {
  let animations = [];
  if (array.length <= 1) return animations;
  let arr = [...array];
  quickSort(arr, 0, arr.length - 1, animations);
  return animations;
}

function quickSort(arr, low, high, animations) {
  if (low < high) {
    const pi = partition(arr, low, high, animations);
    quickSort(arr, low, pi - 1, animations);
    quickSort(arr, pi + 1, high, animations);
  }
}

function partition(arr, low, high, animations) {
  let pivot = arr[high];
  let i = low - 1;

  for (let j = low; j < high; j++) {
    animations.push([i + 1, j, false]);

    if (arr[j] < pivot) {
      i++;

      animations.push([i, j, true]);
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  i++;
  animations.push([i, high, true]);
  [arr[i], arr[high]] = [arr[high], arr[i]];

  return i;
}
