/*

You're a coder - you know how important it is to have a closing parenthesis for every opening parenthesis! Given n pairs of parentheses, write a function that generates all of the possible combinations of regular parentheses, sorted in lexicographical order.

Example

For n = 4, the output should be

solution(n) =
[
  "(((())))", "((()()))",
  "((())())", "((()))()",
  "(()(()))", "(()()())",
  "(()())()", "(())(())",
  "(())()()", "()((()))",
  "()(()())", "()(())()",
  "()()(())", "()()()()"
]

*/


const { result } = require("lodash");

function solution(n) {
    let results = [];
    let options = ['()', '(())', ]
    function backtrack (result, idx) {
        if (idx >= n) {
            results.push([...result]);
            return;
        }
        for (let i = idx; i < n; i++) {
            result.push('()');
            backtrack(result, idx + 1);
            result.pop();
        }
    }

    backtrack([], 0);
    console.log(results)
    return results;
}

function placement(bracketNum, str) {
    if (bracketNum === 1) {
        return "str" + " " + "()";
    } else if (bracketNum === 2) {
        return "str" +
    }
}
/*
                                            ()
                    ()()                                               (())
        ()()()                                    (()())                                 (())()     ()(())
()()()() (())()() ()(())() ()()(())  (()()())       (()())() ((())()) (()(())) ((()()))


outside
inside if a set of brackets present
wrap it
*/
