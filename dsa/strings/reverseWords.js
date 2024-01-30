

function solution(string) {
  if (string.length <= 1) return string;
  let words = [];
  let inValid = [" ", '.', '?', ',', '!']
  for (let i = 0; i < string.length; i++) {
      let currWord = [];
      while (i < string.length && string[i] !== ' ') {
          currWord.push(string[i]);
          i++;
      }
      if (currWord.length !== 0) words.push(currWord.join(''));
  }

  let result = [];
  for (let i = words.length - 1; i >= 0; i--) {
      result.push(words[i]);
  }
  return result.join(' ');
}

///////////
function solution(string) {
    reverse(string);
    let i = 0;
    let j = 0;
    while (i < string.length) {
        while (j < string.length && string[j] !== " ") {
            j++;
        }
        reverse(string, i, j-1);
        i = j+1;
        j++;
    }
    return string;
}

function reverse(s, i, j) {
    while (i <= j) {
        [s[i],s[j]] = [s[j],s[i]];
        i++;
        j--;
    }
}
