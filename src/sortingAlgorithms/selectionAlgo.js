export function getSelectionSortAnimations(arr) {
  const animations = [];
  let array = arr.slice();
  const n = array.length;

  for (let i = 0; i < n; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      animations.push([minIdx, j, false]);
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }

    if (minIdx !== i) {
      animations.push([i, minIdx, true]);
      [array[i], array[minIdx]] = [array[minIdx], array[i]];
    }
  }

  return animations;
}
