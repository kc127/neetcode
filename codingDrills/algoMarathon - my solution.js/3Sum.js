function solution(array) {
  if (array === null || array.length <= 1) {
      return [];
  }
  array.sort((a,b) => a - b);
  let triplets = [];

  for (let i = 0; i < array.length; i++) {
      // check duplicates
      if (i !== 0 && array[i] === array[i-1]) {
          i++;
      }
      let left = i + 1;
      let right = array.length - 1;

      while (left <= right) {
          let sum = array[i] + array[left] + array[right];

          if (sum === 0) {
              triplets.push([array[i], array[left], array[right]]);

              // check duplicates where left is
              while (left <= right && array[left] === array[left + 1]) {
                  left++;
              }

              while (left <= right && array[right] === array[right - 1]) {
                  right--;
              }
              left++;
              right--;
          } else if (sum > 0) {
              right--;
          } else {
              left++;
          }
      }
  }
  return triplets.length === 0 ? triplets : triplets[0];
}
