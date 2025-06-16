export function getInsertionSortAnimations(arr) {
  const animations = [];
  let array = arr.slice(); 
  const n = array.length;

  for (let i = 1; i < n; i++) {
    let j = i;

    
    while (j > 0) {
      animations.push([j, j - 1, false]); 

      if (array[j] < array[j - 1]) {
        animations.push([j, j - 1, true]); 
        [array[j], array[j - 1]] = [array[j - 1], array[j]];
      } else {
        break;
      }
      j--;
    }
  }

  return animations;
}
