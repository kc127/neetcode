/* Given a rectangular matrix of characters, add a border of asterisks(*) to it.

Examples:

picture = ["abc",
           "ded"]

solution(picture) = [ "*****",
                      "*abc*",
                      "*ded*",
                      "*****"]

*/

function solution(picture) {
  let output = [];
  let padding = Array(picture[0].length).fill("*").join('');
  output.push(padding);

  for (let i = 0; i < picture.length; i++) {
    let str = picture[i];
    str = '*' + str + '*';
    output.push(str);
  }
  output.push(padding);
  return output;
}
