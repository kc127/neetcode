/*
'''
Given a set of characters, a minimum length, and a maximum length, generate all strings that can be created using characters from the set between those lengths inclusively.

This algorithm requires a large time and space complexity to enumerate all the possibilities. You should be able to get this to either time out or run out of memory even on rather small lengths.

Assumptions:
1. Unique chars
2. Expect Valid Input
3. Min and max greater than or equal to 0
4. A char can be repeated multiple times across different positions

EXAMPLE(S)
generatePasswords(["a"], 2, 4) == [
  "aa",
  "aaa",
  "aaaa",
]

generatePasswords(["a", "b", "c"], 2, 3) == [
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]

generatePasswords(["a", "A"], 1, 2) == [
  "a", aa,
  A, aA,
  AA, Aa
]

generatePasswords(["a", "A"], 2, 2) == [
   aa,aA,
  AA, Aa
]


Possible Approaches:

1. Brute-Force => Nested for loop

2. Maybe Recursion


repeating solution
                            (a, b, c)
                      a         b        c
                    b   c     a    c
                  c       b  c       a
                        _ _ _
                      for (i = 0; i < n; i++) {

                      }

a _ _-> a a _ -> a a a
                  result.add(a a a)
            a a
          result.add (aa)
                 a a b
        a b _
        a c _
      -> a b _ -> a b c
      -> a c _ -> a c b

b _ _ -> b c _ -> b c

class {
  current  = []
    result = []
    func()
}

func (array, minLength, maxLength) {
    current  = []
    result = []

    function helper() {
      if (current.length > maxLength) {
        return
      }
      - if current >= minLength) {
        //add to result
      }
      for (i = 0, i < n; i++) {
        - add to current
        - helper()
        - pop()
      }
    }

    helper()
    return result
}

current = [a, a, b]

a -> a -> a -> a

          b
          c
        -> b
     b
     c
DFS
no of childres -> maxLength

b

c

[] ->

FUNCTION SIGNATURE
function generatePasswords(validCharacters, minLength, maxLength) {
def generatePasswords(validCharacters: list[str], minLength: int, maxLength: int) -> list[str]:
'''
*/
function generatePasswords(validCharacters, minLength, maxLength) {
  let current = []
  let result = []

  function helper(){
    if(current.length > maxLength){
      return
    }
    if(current.length >= minLength){
      result.push(current.join(''))
    }

    for(let i = 0; i < validCharacters.length; i++){
      current.push(validCharacters[i])
      helper()
      current.pop()
    }
  }
  helper()
  return result

}

/*
n =  (numberOfChars.length)

total time = O(n^maxLen)

total space = O(maxLen) (=>call stack) + O(n^maxLength) (=>results array size) ~ O(n^maxLen)
*/

console.log(generatePasswords(["a"], 2, 4));
/*
[
  "aa",
  "aaa",
  "aaaa",
]
*/
console.log(generatePasswords(["a", "b", "c"], 2, 3));
/*
[
  "aa","aaa","aab","aac",
  "ab","aba","abb","abc",
  "ac","aca","acb","acc",
  "ba","baa","bab","bac",
  "bb","bba","bbb","bbc",
  "bc","bca","bcb","bcc",
  "ca","caa","cab","cac",
  "cb","cba","cbb","cbc",
  "cc","cca","ccb","ccc"
]
*/

console.log(generatePasswords(["a", "A"], 2, 2));
/*
[
   aa,aA,
  AA, Aa
]
*/

console.log(generatePasswords(["a", "A"], 1, 2));
/*
[
  "a", aa,
  A, aA,
  AA, Aa
]
*/

console.log(generatePasswords(["a", "A"], 0, 0));

function generatePasswords(validCharacters, minLength, maxLength) {
  const passwords = [];
  const letters = [];

  function permute() {
    if (letters.length > maxLength)
      return; // base case

    if (letters.length >= minLength && letters.length <= maxLength) {
      passwords.push(letters.join(''));
    }

    for (let i = 0; i < validCharacters.length; i++) {
      letters.push(validCharacters[i]); // append
      permute();
      letters.pop(); // undo after recursion
    }
  }

  permute();

  return passwords;
}
