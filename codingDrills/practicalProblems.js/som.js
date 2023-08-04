function solution(balances, requests) {
  let invalidReq = false;
  let result = [];
  for (let i = 0; i < requests.length; i++) {
      let req = requests[i].split(' ');
      if (req[0] === "withdraw") {
          let fromAcc = Number(req[1]) - 1;
          let amt = Number(req[2]);
          if (balances[fromAcc] !== undefined) {
              balances[fromAcc] = balances[fromAcc] - amt;
          }
          if (balances[fromAcc] === undefined || balances[fromAcc] < 0) {
              invalidReq = true;
              let str = '-' + String(i + 1);
              result.push(Number(str));
              break;
          }
      } else if (req[0] === "transfer") {
          let fromAcc = Number(req[1]) - 1;
          let toAcc = Number(req[2]) - 1;
          let amt = Number(req[3]);
          if (balances[fromAcc] !== undefined && balances[toAcc] !== undefined) {
              balances[fromAcc] = balances[fromAcc] - amt;
              balances[toAcc] = balances[toAcc] + amt;
          }
          if (balances[fromAcc] === undefined || balances[toAcc] === undefined || balances[fromAcc] < 0) {
              invalidReq = true;
              let str = '-' + String(i + 1);
              result.push(Number(str));
              break;
          }
      } else if (req[0] === "deposit") {
          let fromAcc = Number(req[1]) - 1;
          let amt = Number(req[2]);
           if (balances[fromAcc] !== undefined) {
              balances[fromAcc] = balances[fromAcc] + amt;
          }
          if (balances[fromAcc] === undefined || balances[fromAcc] < 0) {
              invalidReq = true;
              let str = '-' + String(i + 1);
              result.push(Number(str));
              break;
          }
      }
      console.log(balances)
  }
  return invalidReq ? result : balances;
}

/*
[10, 100, 20, 50, 30]
[10, 90, 20, 50, 30]
[30, 90, 20, 50, 10]
[30, 90, 5, 65, 30]

*/