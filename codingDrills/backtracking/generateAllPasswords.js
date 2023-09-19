function generateAllHumanFriendlyPasswords(arr, maxLen) {
  let passwords = [];
  let totalLenSoFar = 0;
  let counts = {};
  let stack = [];
  function backtrack() {
      if (totalLenSoFar > maxLen) {
        return;
      }
      if (totalLenSoFar > 0 && totalLenSoFar <= maxLen) {
        passwords.push(stack.join(' '));
      }

      for (let word of arr) {
        let count = counts[word] || 0
        if (count === 0) {
           stack.push(word);
           counts[word] = 1;
           let charsAdded = totalLenSoFar === 0 ? word.length : word.length + 1;
           totalLenSoFar += charsAdded;

           backtrack()

           totalLenSoFar -= charsAdded;
           counts[word]--;
           stack.pop();
        }
      }
  }

  backtrack();
  return passwords;
}