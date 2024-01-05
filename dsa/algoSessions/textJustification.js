/*
Given an array of words and a max length per line, return an array of strings where each string represents a fully justified line. A fully justified line means that the first letter and last letter in the line should be a letter and not a space, and extra spaces are distributed as evenly as possible.

For the last line of text, it should be left-justified, and no extra space is inserted between words.

Assumptions:
1. we can add extra spaces starting from left to right if needed given the str is not the last str in the output array
2. No word length is greater than k

EXAMPLE(S)

example 1

["the", "quick", "brown", "fox", "jumps", "over", "the",
   3       5        5       3       5       4       3
"lazy", "dog"], k = 16
   4      3

returns
["the  quick brown", // (2 spaces, 1 space)
"fox  jumps  over", // (2 spaces, 2 spaces)
"the lazy dog    "]  // (left justify, fill the end with 4 spaces)

example 2
input = ["the"], k = 6
output = ['the***']

example 3
input = [people, animals] // k = 8

outline:
- intialise results to empty
- initialize empty array current
- iterate through the input list of word
- at each index,
  -if the current list is not full,
    - add word to current list
  - otherwise,
    - add copy of current list to sentences
    - set current list to empty
    - add word at this index to current list
- iterate through the results and at each index
  - justify words in each array
  - join words into a sentence
- return results

the + ' ' (4)
quick + ' ' (6)
brown
   vs
the
' ' + quick
' ' + brown

["the", "quick", "brown"]
k=16 chars=13   remaining spaces = 16-13=3
iterate through the sentences array
    at each array
      diff = k - array.length
      loop through the word in array using index
          add one space
          decrement diff
          if diff is not 0 && index = array.length - 1
              reset index = 0

FUNCTION SIGNATURE
function justify(words, maxWidth) {
def fullJustify(words: list[str], maxWidth: int) -> list[str]:




35 + (9 - 2) = 42
48 / 16 = 3
*/
function justify(words, maxWidth) {
  let sentences = [];
  let currSentence = [];
  let currLength = 0;

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    if (currLength + word.length < maxWidth) {
      if(currLength > 0) currLength += 1;
      currLength += word.length;
      currSentence.push(word);
    }
    else {
      currSentence = handleSpaces(currSentence, k - currLength);
      sentences.push(currSentence.slice());
      currSentence = [word]
      currLength = word.length;
    }
  }

  let handleSpaces = (sentence, spaces) => {
    while (spaces > 0) {

    }
  }
  // for(let sentence of sentences) {
  //   console.log(sentence);
  // }
  return sentences;
}

console.log(justify(["the", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog"], 16))

/*
["the", "quick", "brown", "fox", "jumps", "over", "the",
"lazy", "dog"], k = 16

currSentence = ['the', 'quick', 'brown']
currLength   = 13
spaces = currSentence.length - 1
currLength < k - 1 (15)

logic when to add the space
  - if currLength < k - 1
      add the space
  - else
      add the word and not the space
*/