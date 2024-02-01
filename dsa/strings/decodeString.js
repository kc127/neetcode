
function decodeString(str) {
  let kStack = [];
  let strStack = [];
  let currK = "";
  let currStr = "";
  let i = 0;
  while (i < str.length) {
    if (isNumber(str[i])) {
      currK += str[i];
    } else if (isAlpha(str[i])) {
      currStr += str[i];
    } else if (str[i] === "[") {
      kStack.push(currK);
      strStack.push(currStr);
      currK = "";
      currStr = "";
    } else if (str[i] === "]") {
      let k = kStack.pop();
      let decodedStr = "";
      for (let j = 0; j < k; j++) {
        decodedStr += currStr;
      }
      currStr = strStack.pop() + decodedStr;
    }
    i++;
  }
  return currStr;
}

function isNumber(ch) {
  return (ch >= "0" && ch <= "9");
}

function isAlpha(ch) {
  return (ch >= "a" && ch <= "z");
}

console.log(decodeString("3[a]2[bc]"), "aaabcbc");