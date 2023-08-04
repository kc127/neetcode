function solution(units, target) {
  let results = [];
  let uniqueSet = {};
  function backtrack(result = []) {
      let sum = result.reduce((a, total) => a + total, 0);
      if (sum === target) {
          let charStr = result.sort((a,b) => a - b);
          charStr.join('')
          if (uniqueSet[charStr] === undefined) {
              results.push([...result]);
              uniqueSet[result.join('')] = 1;
          }
          return;
      } else if (sum > target) {
          return;
      }

      for (let i = 0; i < units.length; i++) {
          if (units[i] <= target) {
              result.push(units[i]);
              backtrack(result);
              result.pop();
          }
      }
  }
  backtrack();
  console.log(uniqueSet)
  return results;
}
/*

                                 1
                          1              2
                      1       2
                  1       2


      input                                    line
      [], false                                result = [1], line 14 = backtrack([1], false) =
      [1], false                               result = [1, 1], line 14 = backtrack([1, 1], false) =
      [1,1], false                             result = [1, 1, 1], line 14 = backtrack([1, 1, 1], false) =
      [1, 1, 1], false                         result = [1, 1, 1, 1], line 14 = backtrack([1, 1, 1, 1], false) = return, result = [1,1,1], result = [1, 1, 1, 2], backtrack([1, 1, 1, 2])
      [1, 1, 1, 1], false                      results = [[1, 1, 1, 1], reachedTarget = true, return
*/