functon twoSum (array, target) {
  let pairs = {};
  for (let i = 0; i < array.length; i++) {
    let curr = array[i];
    let diff = target - curr;
    if (pairs[diff] !== undefined) {
      return [i, pairs[diff]];
    } else {
      pairs[curr] = i;
    }
  }
}
