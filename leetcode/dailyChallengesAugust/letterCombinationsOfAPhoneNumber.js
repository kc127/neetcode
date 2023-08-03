var letterCombinations = function(digits) {
  if (digits.length === 0) return []
    let result = [],
      tempDS = [],
      mapping = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz',
      }

  function helper(index, tempDS) {
    if (tempDS.length === digits.length) {
      result.push([...tempDS].join(''))
      return
    }

    for (let i = 0; i < mapping[digits[index]].length; i++) {
      let char = digits[index]
      tempDS.push(mapping[char][i])
      helper(index + 1, tempDS)
      tempDS.pop()
    }
  }
  helper (0, tempDS)
  return result
};