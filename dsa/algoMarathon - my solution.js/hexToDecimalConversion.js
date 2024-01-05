function solution(n) {
  let hexToDec = {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      A: "10",
      B: "11",
      C: "12",
      D: "13",
      E: "14",
      F: "15"
  }

  let decToHex = {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "A",
      11: "B",
      12: "C",
      13: "D",
      14: "E",
      15: "F"
  }
  if (n === 0) return "0";
  if (n <= 9) {
      return decToHex[n];
  }
  if (n > 9 && n < 16) {
      return decToHex[n];
  }

  let hexStr = [];
  while (n) { // 16
      let q = Math.floor(n / 16) // 1
      let r = n % 16  // 0
      hexStr.unshift(decToHex[r] || r);
      n = q;
  }
  return hexStr.join('');

}
