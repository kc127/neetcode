var minOperations = function(logs) {
  let total = 0;
  for (let i = 0; i < logs.length; i++) {
      let log = logs[i];
      if (log === '../') {
          if (total === 0) {
              continue;
          } else {
              total--;
          }
      } else if (log === './') {
          continue;
      } else {
          total += 1;
      }
  }
  return total;
};