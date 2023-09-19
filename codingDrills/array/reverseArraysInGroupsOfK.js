function reverse(arr, k) {
  if (arr === null || arr.length === 0) return [];
  let res = [];
  let i = 0;
  while (i <= arr.length - k) {
    res = res.concat(reverseArr(arr, i, i + k));
    i += k;
  }
  console.log(i)
  if (i < arr.length) {
    res = res.concat(arr.slice(i));
  }
  console.log(res)
  return res;
}

function reverseArr(arr, startIdx, endIdx) {
  let res = [];
  for (let i = endIdx - 1; i >= startIdx; i--) {
    res.push(arr[i]);
  }
  return res;
}

// official solution
function reverse(arr, k) {
  function reverseSubarray(start, count) {
    let end = Math.min(arr.length, start + count) - 1
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]]
      start++
      end--
    }
  }

  if (arr == null)
    return

  for (let i = 0; i < arr.length; i += k)
    reverseSubarray(i, k)
}