

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

