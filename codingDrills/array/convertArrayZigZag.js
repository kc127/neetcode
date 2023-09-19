function convertZigZagArray (arr) {
  arr.sort((a,b)=> a - b);
  console.log(arr)
  for (let i = 2; i < arr.length; i+=2) {
    [arr[i-1], arr[i]] = [arr[i], arr[i-1]];
  }
  return arr;
}

console.log(convertZigZagArray([1, 4, 3, 2]));
console.log(convertZigZagArray([4, 3, 7, 8, 6, 2, 1]));