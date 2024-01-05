// Convert a non-negative integer to its equivalent representation as words in English.

// Example

// For num = 1, the output should be
// solution(num) = "One";
// For num = 123, the output should be
// solution(num) = "One Hundred Twenty Three";
// For num = 12345, the output should be
// solution(num) = "Twelve Thousand Three Hundred Forty Five";
// For num = 1234567, the output should be
// solution(num) = "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven".
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] integer num

// Guaranteed constraints:
// 0 ≤ num ≤ 231 - 1.

// [output] string
function solution(num) {
  let intToStr = {
      "1":"One",
      "2":"Two",
      "3":"Three",
      "4":"Four",
      "5":"Five",
      "6":"Six",
      "7":"Seven",
      "8":"Eight",
      "9":"Mine",
      "10":"Ten",
  }
  if (num < 10) {
      return intToStr[num];
  }
  let numToStr = String(num);
  let result = [];
  for (let i = 0; i < numToStr.length; i++) {
      let curr = numToStr[i];
      result.push(intToStr[curr])

  }
}
//
function solution(num) {
  let result = "";
  let intToStr = {
      "1":["One","Ten", "One Hundred", "One Thousand", "One Million", "One Billion"],
      "2":["Two", "Twenty", "Two Hundred", "Two Thousand", "Two Million", "Two Billion"],
      "3":["Three","Thirty", "Three Hundred", "Three Thousand", "Three Million", "Three Billion"],
      "4":["Four","Fourty", "Four Hundred", "Four Thousand", "Four Million", "Four Billion"],
      "5":["Five","Fifty", "Five Hundred", "Five Thousand", "Five Million", "Five Billion"],
      "6":["Six","Sixty", "Six Hundred", "Six Thousand", "Six Million", "Six Billion"],
      "7":["Seven","Seventy", "Seven Hundred", "Seven Thousand", "Seven Million", "Seven Billion"],
      "8":["Eight","Eighty", "Eight Hundred", "Eight Thousand", "Eight Million", "Eight Billion"],
      "9":["Nine","Ninety", "Nine Hundred", "Nine Thousand", "Nine Million", "Nine Billion"]
  }
  let ones = {
      "Ten One" : "Eleven",
      "Ten Two" : "Twelve",
      "Ten Three" : "Thirteen",
      "Ten Four" : "Fourteen",
      "Ten Five" : "Fifteen",
      "Ten Six" : "Sixteen",
      "Ten Seven" : "Seventeen",
      "Ten Eight" : "Eighteen",
      "Ten Nine" : "Nineteen",
  }
  let strNum = String(num);
  let numLen = strNum.length;
  if (numLen === 1) {
      result += intToStr[strNum[0]][numLen - 1];
  }
  if (numLen === 2) {
      result += intToStr[strNum[0]][numLen - 1];
      if (strNum[1] !== "0") {
          result += " " + intToStr[strNum[1]][numLen - 2];
      }
  } else if (numLen === 3) {
     result += intToStr[strNum[0]][numLen - 1];
     result += " " + intToStr[strNum[1]][numLen - 2];
     result += " " + intToStr[strNum[2]][numLen - 3];
  } else if (numLen=== 4) {
      result += intToStr[strNum[0]][numLen - 1];
      result += " " + intToStr[strNum[1]][numLen - 2];
      result += " " + intToStr[strNum[2]][numLen - 3];
      result += " " + intToStr[strNum[3]][numLen - 4];
  } else if (numLen === 5) {

  }

  if (ones[result]) result = ones[result];

  return result;
}
