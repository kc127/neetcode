function solution(array) {
  if (array === null || array.length === 1) return array;

  for (let i = 0; i < array.length; i++) {
      for (let j = i+1; j < array.length; j++) {
          if (array[i] > array[j]) {
              [array[i], array[j]] = [array[j], array[i]];
          }
      }
  }
  return array;
}
