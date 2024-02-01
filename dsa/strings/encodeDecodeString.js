function encode(strs) {
  let encodedStr = "";

  for (let str of strs) {
    for (let ch of str) {
      if (ch === "/") {
        encodedStr += "/" + "/";
      } else {
        encodedStr += ch;
      }
    }
    encodedStr += "/:";
  }
  return encodedStr;
}


console.log(encode(["Hello","World"]))

function decode(str) {
  let strs = [];
  let currStr = ""
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === "/" && str[i+1] === "/") {
      currStr += "/";
      i++;
    } else if (str[i] === "/" && str[i+1] === ":") {
      strs.push(currStr);
      currStr = ""
      i++;
    } else {
      currStr += str[i];
    }
  }
  return strs;
}

console.log(decode("Hello/:World/:"))