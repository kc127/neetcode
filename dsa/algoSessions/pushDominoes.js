// https://leetcode.com/problems/push-dominoes/

function playDominos(dominosRow, slow, fast) {
  if (dominosRow[slow] === 'R' && dominosRow[fast] === 'L') {
    while (fast - slow > 2) {
      // fill from the outside in
      dominosRow[++slow] = 'R';
      dominosRow[--fast] = 'L';
    }
  } else {
    let d = '.';
    if (dominosRow[slow] === 'R') d = 'R';
    else if (dominosRow[fast] === 'L') d = 'L';

    for (let i = 1; slow + i < fast; i++) {
      // fill with L or R
      dominosRow[slow + i] = d;
    }
  }
}

function finalDominosState(dominosRow) {
  let slow = -1
  let fast = 0
  while (fast < dominosRow.length) {
    while (dominosRow[fast] === '.'){
      fast += 1
    }
    playDominos(dominosRow, slow, fast)
    slow = fast
    fast += 1
  }

  return dominosRow;
}